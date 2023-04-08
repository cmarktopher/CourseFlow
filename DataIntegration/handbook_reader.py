import os
import re
from typing import Dict

import matplotlib.pyplot as plt
from PyPDF2 import PdfReader
import networkx as nx

unit_listings = "handbooks/DeakinUniversity2019_Units-v4-accessible.pdf"
unit_listings_text_cache = "handbooks/unit_listings_text_cache.txt"
course_listings = "handbooks/DeakinUniversity2019_Courses-v4-accessible.pdf"
unit_details_first_page = 27
unit_details_last_page = 1210
# A dictionary of all units from the handbook
units = {}


class Unit:
    id = 1

    def __init__(self):
        self.code = f"DEFAULT_CODE_{Unit.id}"
        self.title = f"DEFAULT_TITLE_{Unit.id}"
        self.raw_information = ""
        self.description = ""
        self.prerequisites = []
        self.corequisites = []
        self.incompatible_with = []
        self.constraints = {}
        self.is_discontinued = False
        Unit.id += 1

    def __repr__(self):
        return f"{self.code} - {self.title}"


# todo: write tests
# fixme: ACA711, ACR210 title capturing "Offering information"
# todo: write tests for second group's lookahead cases
def extract_unit_codes_and_titles(text: str) -> Dict[str, Unit]:
    # Comment partially generated by GPT-3.5 2023-04-06
    # Regex pattern to capture a unit code, title, and raw unit information from a handbook page.
    # 1. Matches three uppercase letters followed by three digits as the unit code,
    # 2. any text between a hyphen or em dash and the text " Enrolment modes:" or " Year:" as the title,
    # 3. and any text before the next unit code using a positive lookahead assertion.
    pattern = re.compile(r"([A-Z]{3}\d{3})"  # 1
                         r" [–-] "
                         r"(.+?)(?= Enrolment modes:| Year:| Offering information:)"  # 2
                         r"(.+?)(?=[A-Z]{3}\d{3} [–-])")  # 3

    units = {}
    # Create a new Unit object for each unit extracted from the handbook
    for match in pattern.finditer(text):
        unit = Unit()
        unit.code = match.group(1)
        unit.title = match.group(2)
        unit.raw_information = match.group(3).strip()

        units[unit.code] = unit

    return units


def extract_unit_enrolment_constraints(units: Dict[str, Unit]) -> Dict[str, Unit]:
    unit_pattern = re.compile(r"[A-Z]{3}\d{3}")

    for unit in list(units.values()):
        constraints_to_fill = [
            (r"Prerequisite: (.+) (?=Corequisite:)", unit.prerequisites),
            (r"Corequisite: (.+)(?=Incompatible with:)", unit.corequisites),
            (r"Incompatible with: (.+)(?=Scheduled learning activities)", unit.incompatible_with)
        ]
        for constraint_search_pattern, constraint in constraints_to_fill:
            # Find all unit codes that are part of the constraint
            constraint_search_result = re.search(constraint_search_pattern, unit.raw_information)
            if constraint_search_result is not None:
                constraint_search_result = unit_pattern.findall(constraint_search_result.group(1))

                # Note every unit listed as part of the constraint by the handbook
                for code in constraint_search_result:
                    if code not in units.keys():
                        new_unit = Unit()
                        units[code] = new_unit
                        new_unit.is_discontinued = True
                        new_unit.code = code
                    constraint.append(units[code])

    return units


def read_unit_details(text: str) -> Dict[str, Unit]:
    # Replace newline characters with spaces
    text = text.replace("\n", " ")
    # Convert any double spaces to single spaces
    text = re.sub(r" {2,}", " ", text)

    # Split the text by unit information
    units = extract_unit_codes_and_titles(text)
    extract_unit_enrolment_constraints(units)

    return units


def unit_distance_metric(unit_1_code: str, unit_2_code: str):
    if unit_1_code == unit_2_code:
        return 0

    distance = 1
    unit_1 = units[unit_1_code]
    unit_2 = units[unit_2_code]

    if unit_1_code[0] == unit_2_code[0]:
        distance -= 0.1
        if unit_1_code[1:3] == unit_2_code[1:3]:
            distance -= 0.1
            if unit_1_code[3] == unit_2_code[3]:
                distance -= 0.1

    if unit_1 in unit_2.prerequisites or unit_2 in unit_1.prerequisites:
        distance -= 0.5

    return distance


def draw_unit_network(network: nx.DiGraph):
    # Compute the layout using the force-directed algorithm
    pos = nx.spring_layout(network)
    # Draw the graph
    nx.draw(network, pos, node_color=[network.degree(v) for v in network.nodes()], with_labels=True, font_weight='bold')

    plt.show()


def create_unit_network(units: Dict[str, Unit]) -> nx.DiGraph:
    G = nx.DiGraph()

    # Add units to graph
    for code in units.keys():
        G.add_node(code)

    # Add prerequisites to graph
    for code, unit in units.items():
        if unit.prerequisites:
            for prereq_unit in unit.prerequisites:
                G.add_edge(prereq_unit.code, code)

    return G


if __name__ == "__main__":
    # Read the handbook text from the cache file if it exists, otherwise create the cache file
    if os.path.exists(unit_listings_text_cache):
        with open(unit_listings_text_cache, "r", encoding="utf-8") as file:
            text = " ".join(file.readlines())
    else:
        # Read all unit information text from the handbook PDF
        reader = PdfReader(unit_listings)
        text = []
        for page in reader.pages[unit_details_first_page - 1:]:
            text.append(page.extract_text(orientations=(0,)))
        text = " ".join(text)

        # Write the text to a cache which will be used in the future
        with open(unit_listings_text_cache, "w", encoding="utf-8") as file:
            file.write(text)
    units = read_unit_details(text)
    # todo: Remove debug filtering
    unit_network = create_unit_network({code: unit for code, unit in units.items() if code.startswith("S")})
    draw_unit_network(unit_network)
    # graph_units(units)
    print()
