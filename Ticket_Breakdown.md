# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1st Ticket

Title:
Accommodate the new Custom IDs in the Database Schema

Description:
The database needs to be extended to create a new table that contains the new Custom IDs and should link them to the existing Agents and Facilities.

AC:
 - Create a new table;
 - Link the new Facilities and Agents using the new Custom IDs in a many-to-many relationship;

Estimations:
 - Research: TBD;
 - Implementation: TBD;
 - Testing: TBD;
Because I don't have enough context I cannot provide an accurate estimation.


2nd Ticket

Title:
Create a functionality that allows Facilities to Create and Update a Custom ID

Description:
This is a full stack task that will allow the Facilities to use an interface integrated with the DB to create and update Custom IDs.

AC:
 - Facilities should be able to create a new Custom ID;
 - Facilities should be able to update/ edit an existing Custom ID;

Estimations:
 - Research: TBD;
 - Implementation: TBD;
 - Testing: TBD;
Because I don't have enough context I cannot provide an accurate estimation.


3rd Ticket

Title:
Update the getShiftsByFacility function to Retrieve Custom IDs 

Description:
The existing getShiftsByFacility function should be updated to Retrieve the new created fields Custom IDs. 

AC:
 - The function getShiftsByFacility should return retrieve Custom IDs

Estimations:
 - Research: TBD;
 - Implementation: TBD;
 - Testing: TBD;
Because I don't have enough context I cannot provide an accurate estimation.