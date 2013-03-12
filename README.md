riAPI
=====

Who are the ribots? What do they look like? What's their favourite sweet? All is revealed with this API.

Using the API
=============

All requests will be based off the root URL, which is:

    http://www.matto1990.com:3000/api/

All responses are in JSON format. If any attribute is optional it will either be a blank attribute in the JSON, or simply not appear in the JSON. You application should be able to deal with optional attributes not appearing in the response.

Get all team members
====================

**Request**

To get a list of all ribot team members, send a GET request to:

    /team

**Response**

The response will be a list of events ordered by _id_. The response will be in JSON with these attributes:

- *id* - Unique team member id (required)
- *firstName* - (required)
- *lastName* - (required)
- *nickname* - A nickname the person likes to be called (optional)
- *hexColor* - The persons unique ribot hex colour, prefixed with a # (optional)
- *role* - The persons role at ribot (optional)

Get a specific team member
==========================

**Request**

To get all data about a specific ribot team member, send a GET request to:

    /team/<id>

**Response**

The response will be in JSON with these attributes:

- *id* - Unique team member id (required)
- *firstName* - (required)
- *lastName* - (required)
- *nickname* - A nickname the person likes to be called (optional)
- *hexColor* - The persons unique ribot hex colour, prefixed with a # (optional)
- *role* - The persons role at ribot (optional),
- *description* - A short description about the person (optional)
- *twitter* - The persons twitter username (optional)
- *favSweet* - The persons favourite sweet (optional)
- *favSeason* - The persons favourite season of the year. Either spring, summer, autumn or winter (optional)

Get a team members ribotar
==========================

**Request**

A ribotar is an avatar for a team member. They are usually PNG images. You can access the ribotars by sending a GET request to:

    /team/<id>/ribotar

*Note:* Not every team member has a ribotar

Get the studio information
==========================

**Request**

Get by sending a request to:

    /studio

**Response**

- *addressNumber* - The number on the street (required)
- *street* - The street name (required)
- *city* - (required)
- *county* - (required)
- *postcode* - (required)
- *country* - (required)
- *photos* - An array of URLs to photos of the studio (optional)
