# 11 Express.js: Note Taker

## The Task

The task is to create an application called Note Taker (or NoteTaker) that can be used to write and save notes. It is found on the mcleanGit GitHub repo as TakeNote.
This application uses an Express.js back end and will save and retrieve note data from a JSON file.

The application’s front end was already created. The purpose of this project is to create the back end, connect the two, and then deploy the entire application to Heroku. The starter code for the front end is: (https://github.com/coding-boot-camp/miniature-eureka).

The application addresses the following User Story and seeks to meet the following Acceptance Criteria

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
 SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
 THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
 THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
 THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
 THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
 THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
 THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Mock-Up

The following images show the web application's appearance and functionality: 

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./Assets/11-express-homework-demo-01.png)

![Note titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other notes listed on the left.](./Assets/11-express-homework-demo-02.png)

## Setup

The application has a `db.json` file on the back end, which is used to store and retrieve notes using the `fs` module.

The following HTML routes are created:

* `GET /notes` returns the `notes.html` file.

* `GET *`  returns the `index.html` file.

The following API routes are created:

* `GET /api/notes` reads the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` receives a new note to save on the request body, adds it to the `db.json` file, and then returns the new note to the client. 
Each note has a *unique id* when it's saved (using `npm` packages: EX TBD!).

## 'Bonus' - additional functionality

The preliminary work has not dealt with DELETE requests, but the application has that functionality in the front end. 
The application hopes to add a DELETE route to the application using the following guideline:

* `DELETE /api/notes/:id` should receive a query parameter containing the id of a note to delete. To delete a note, all notes need to be read from the `db.json` file, the note with the given `id` property removed, and the notes then rewritten to the `db.json` file.  Implemented.

## Review

The following items are submitted for review:

* The URL of the functional, deployed application.
  Note: deployed to Heroku!

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.
  https://github.com/mcleanGit/TakeNote


- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
