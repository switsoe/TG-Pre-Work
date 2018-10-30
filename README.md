# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

The browser will first check various caches and determine if the Domain Name System (DNS) record exists.  If not, it sends packets of data to the URL int the form of an HTTP request and determines the associated IP address of the server.  Once there is a correct two way connection typically with a TCP/IP, the server takes the packets of data and determines what data to send back based on the query. If everything is in order, the server then sends packets of information in code to the client from its database

## From start to finish how does that data reach you to be rendered in the browser?

The server sends packets of information back to be interpreted by a client web browser or interface and renders on the client's screen.  These packets are "wrapped" in the same fashion it was sent to the server to increase efficiency and save time.  The client has a browser that can interpret the data and render it in the browser or app.  Client side makes use of assets to render a page, this can include CSS files, HTML files, JavaScript files, Images

## What code is rendered in the browser?

Primarily HTML, CSS, and JavaScript

## What is the server-side code’s main function?

To retrieve accurate data/requests from the server's database to send out to the client based on client requests or queries

## What is the client-side code’s main function?

To render the code sent from the server in a readable and stylized fashion that the client can interact with (ie UI/UX)

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

Usually one folder for each asset with multiple files therein.  However, there are cases where there are less assets (or more).  For example, a page could be rendered with just HTML, or HTML and CSS.

## How many instances of the server-side code are available at any given time?

Multiple, many instances of objects and so forth are available in any given scenario

## What is runtime?

The length of time it takes for a program to run

## How many instances of the the databases connected to the server application are created?

There can be multiple depending on the scenario
