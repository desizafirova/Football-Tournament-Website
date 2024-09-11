# European Football Championship Tournament Web Application | Final exam from Sirma Academy

## Overview

This project visualizes the matches and results from the European Football Championship 2024. The application is designed to provide valuable information to the Users about the matches and players in the teams in a simple way. Also, the UI generates dynamically different team formations on the football field where the User even has the ability to review the teams' formations side by side for each game.
The application is developed using React and styled-components for styling. The data used in the application was sourced from CSV files which contain details about teams, players, matches and player records.

## Requirements and Specifications

1. Handling toMinutes: toMinutes can be NULL, representing the end of the match (e.g., 90 minutes).
2. CSV Parsing: No external libraries are used for CSV parsing.
3. Date Format Support: Supports multiple date formats to enhance usability.
4. Clean Code Practices: Followed clean code conventions for readability and maintainance.
5. React Frontend: Developed a user-friendly React application with styled-components for styling. NO external component libraries were used.
6. Filter functionality: Built Filter functionality by Date for "AllMatches" page and by Team in "TeamDetails" page
7. Responsive Design: The application provide responsive design to all type of devices.

## Application view and logic

1. App Layout:

- All of the pages in this application are built in the App Layout component, which includes a Header component with a Navigation bar that has paths to all other pages, such as: "Homepage," "All Matches," "Group Stage," "Team Details," and "Match Details." Only "Page Not Found" is excluded from the App layout, but it has a "ButtonBack" component to go back to the previous page (to the app layout).

2. Homepage:

- On this page, all the matches from the Round of 16, Quarter-finals, Semi-finals, and Final stages are displayed in a bracket format. On the right side, there is a div block containing the results from the last match in the European Football Championship Tournament 2024.
- Users can click on any match in the bracket or on the div block to navigate to the detailed view of that match on the "Match Details" page.

3. Group Stage:

- If users click on the "Group Stage" NavLink from the Navigation bar, they are automatically redirected to a page where the matches from the Group Stage are presented in a table, including the date of the match, teams, and score. Users can click on any match row to navigate to the detailed view of that match on the Match Details page.

4. All Matches

- When users click on the "All Matches" NavLink in the navigation bar, they are redirected to the "All Matches" page. This page displays a table of football matches from the European Football Championship. It allows users to view match details and filter the matches by date range. Users can filter matches by selecting a date range using the Filter component. The table updates dynamically to display only matches within the specified date range. Users are not allowed to choose dates which are outside of the tournament. Users can click on any match row to navigate to the detailed view of that match on the Match Details page.

5. Match Details:

- If users click on any match from the Homepage or Group Stage, they are automatically redirected to this page. At the top of the page, the teams' names and the score from the match are displayed.
- The team formations of both teams from the selected match are presented dynamically side by side on the UI. The formations are positioned on top of a PNG image of a football field, with players' positions marked as red points with numbers that correspond to the players' team numbers. For these positions, an object named positionsOnTheField was created, where each type of position, such as Goalkeeper (GK), Defender (DF), Midfielder (MF), and Forward (FW), has an array of objects containing x and y coordinates calculated as percentages of the field. These coordinates determine where each player is placed on the football field. In the TeamFormation component, a function named generateTeamFormation counts the players of each position and selects a different index from the object for each player. This function dynamically places players on the field using the coordinates from positionsOnTheField, with each player's position determined by their type and order in the formation.
- Below the Team Formations on the Match Details page, users can find a detailed table listing all the players who participated on the field during the selected match. This table provides key information about each player's involvement in the match, giving users an in-depth view of player participation and performance. It lists all players who were on the field during the match, including those who started and those who were substituted in.

6. Teams:

- When users click on the "Teams" NavLink in the navigation bar, they are redirected to the Teams page. On this page, users are presented with a dropdown (Select element) containing a list of all the teams participating in the tournament. Once a team is selected, a table appears on the UI showing the roster of players for the chosen team. The table includes essential information for each player: Team number, Full Name, and position on the field.

## Installation and Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/desizafirova/Football-Tournament-Website

   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd Football-Tournament-Website

   ```

3. **Install Dependencies**:

   ```bash
   npm install

   ```

4. **Run the Application**:
   ```bash
   npm run dev
   ```
