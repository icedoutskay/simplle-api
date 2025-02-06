# HNG12 Stage 0 Backend API

This project is a simple API that returns basic information, including my registered email, the current date and time in ISO 8601 format, and the URL of this GitHub repository.

## Setup Instructions

1. Clone the repository: `git clone https://github.com/icedoutskay/simplle-api.git`
2. Navigate to the project directory: `cd simplle-api`
3. Install dependencies: `npm install`
4. Run the API: `node index.js`


### Endpoint

`GET /`

### Request/Response Format

**Request:**

None

**Response (200 OK):**

```json
{
  "email": "somkeneodikpo@example.com",
  "current_datetime": "2024-10-27T12:34:56Z",
  "github_url": "[https://github.com/icedoutskay/simplle-api](https://github.com/icedoutskay/simplle=api)"
}