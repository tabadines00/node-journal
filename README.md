# node-journal
This app uses node.js and react to create a journaling program

### Todos
- Front End
    - Basic UI/UX
        - Basic CSS: Green/Red
    - Pros and Cons
        - Pros/Cons/Refs save simultaneously
        - List expands for every line added
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
