# node-journal
This app uses node.js, mongodb and react to create a daily journaling program.

## Program Structure
### React Component Tree:
- App: Holds CurrentUser state
    - Home: Shows all entries from Current User
    - NewReflection: Manages Pro/Con/Refection States and API calls
        - TextList: Receives state and sets state from input 
    - Login: POSTs sanitized username/password
    - Signup: POSTs sanitized new username/password
    
### Node/Express endpoints
- /api
    - /register (POST): user/pass are added to database if unique and safe
    - /authenticate (POST): user/pass are checked against database
    - /addEntry (POST): New entry is added to database with userId and date
    - /allEntries (GET): All user entries are displayed to the CurrentUser

### Todos
- Front End
    - Basic UI/UX
        - Basic CSS: Green/Red
        - Enter makes a new line
    - Pros and Cons
        - Pros/Cons/Refs save simultaneously
    - Home page with all Reflections
        
- Backend API
    - Add reflections
        - Whole Refs are saved with POST
    - View reflections
        - All User Refs are sent in an array
        - Send as:
        ```
        {
            userId: userId
            id: id,
            date: date,
            pros: [
                pro,
                pro
            ],
            cons: [
                con,
                con
            ],
            refs: [
                ref,
                ref
            ]
        }
        ```
    - Store reflections in DTO then Database
