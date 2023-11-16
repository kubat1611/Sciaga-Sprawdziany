const express = require('express')
const app = express()

app.get("/api", (req,res) => {
    res.json({
        "Układ mięśniowy": [
          {
            "title": "Topic 1",
            "subtopics": [
              {
                "title": "Subtopic 1",
                "notes": [
                  {
                    "id": 1,
                    "content": "Note 1 for Subtopic 1"
                  },
                  {
                    "id": 2,
                    "content": "Note 2 for Subtopic 1"
                  }
                ]
              },
              {
                "title": "Subtopic 2",
                "notes": [
                  {
                    "id": 3,
                    "content": "Note 1 for Subtopic 2"
                  },
                  {
                    "id": 4,
                    "content": "Note 2 for Subtopic 2"
                  }
                ]
              }
            ]
          },
          {
            "title": "Układ kostny",
            "subtopics": [
              {
                "title": "Subtopic 1",
                "notes": [
                  {
                    "id": 5,
                    "content": "Note 1 for Subtopic 1"
                  },
                  {
                    "id": 6,
                    "content": "Note 2 for Subtopic 1"
                  }
                ]
              },
              {
                "title": "Subtopic 2",
                "notes": [
                  {
                    "id": 7,
                    "content": "Note 1 for Subtopic 2"
                  },
                  {
                    "id": 8,
                    "content": "Note 2 for Subtopic 2"
                  }
                ]
              }
            ]
          }
        ]
      }      
    )
})

app.get("/*", (req,res) => {
    res.json("No route found")
})

app.listen(5000, () => {console.log("Server started on port 5000")})