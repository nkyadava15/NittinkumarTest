# NittinkumarTest
Ques 1:

Front-end:
The portion of the website that users see and interact with is called the front-end. It is in charge of how the website functions and looks, as well as how users interact with it. JavaScript, CSS, and HTML make up the front-end.

The fundamental component of web pages is HTML (HyperText Markup Language). It specifies a web page's structure and instructs the browser on how to display it.CSS (Cascading Style Sheets) is a tool used to manage a web page's appearance and feel. It specifies the web page's layout, colors, and fonts.A programming language called JavaScript is used to make web pages more interactive. 

Back-end:
The portion of a website that users cannot see is called the back-end. It is in charge of handling requests, storing data, and creating the content that is seen on the front end. Usually, programming languages like Python, PHP, or Java make up the back-end.

Back-end development frequently employs the general-purpose programming language Python. It is extremely powerful and simple to use.A server-side programming language known as PHP is frequently employed for back-end development. There are numerous libraries and frameworks for it because of how widely used it is.Back-end development is done using Java, a general-purpose programming language. It is quite potent, and numerous huge.


Ques 2:

Web pages are constructed from HTML tags. They are used to specify a web page's structure and instruct the browser on how to display it. An opening tag and a closing tag are usually used in pairs. The closing tag informs the browser of the end of the element while the opening tag specifies the type of element being specified.

HTML tags come in a wide variety of forms, however they can be broadly divided into the following groups:
Structural tags: These tags specify how a web page is organized. They contain tags like "html," "head," "body," "h1," "p," and "br."

Presentational tags: These tags were used to manage how text was displayed on a web page in earlier versions of HTML. They should be replaced using CSS as they are currently deprecated. The presentational tags center, big, and little are a few examples.
Semantic tags: These tags are used to give the text on a web page more meaning. They contain tags like "abbr," "cite," "dfn," and "time."
Form tags: These tags are used to create forms on a web page. They include tags such as <input>, <select>, and <textarea>.


Here are some examples of HTML tags:
The <html> tag defines the beginning of an HTML document.
The <head> tag defines the header of an HTML document.
The <body> tag defines the body of an HTML document.
The <h1> tag defines a level 1 heading.
The <p> tag defines a paragraph.
The <br> tag inserts a line break.
The <b> tag defines bold text.
The <i> tag defines italic text.
The <u> tag defines underlined text.
The <font> tag defines the font, size, and color of text.
The <color> tag defines the color of text.
The <abbr> tag defines an abbreviation.
The <cite> tag defines the title of a work.
The <dfn> tag defines a term that is going to be defined within the content.
The <time> tag defines a time.
The <input> tag defines an input field.
The <select> tag defines a dropdown menu.
The <textarea> tag defines a text area.
I hope this helps! Let me know if you have any other questions.






Ques 3:
A concept in web development called the Virtual DOM (Document Object Model) provides an abstraction of the actual browser DOM. It is an in-memory version of the HTML code for a web page or application.

Here is a brief description of how the Virtual DOM functions:

Initial render: When a React component is created, a corresponding Virtual DOM representation of the component's structure and content is generated.

Diffing: React creates a new Virtual DOM representation of the modified component whenever a component's state or props change.

Algorithm for diffing: To find changes or adjustments that need to be made, React's diffing algorithm compares the current Virtual DOM with the old Virtual DOM representation.

Minimal updates: After identifying the differences, React determines the minimal set of changes required to update the actual browser DOM. This process is called reconciliation.


Batch updates: React performs batch updates to minimize the number of interactions with the actual browser DOM. It collects all the changes needed and applies them in a single batch, which improves performance.

Updating the DOM: Finally, React updates the real browser DOM with the changes identified during the reconciliation process. Only the necessary updates are made, which leads to efficient rendering.


The Virtual DOM's main advantage is performance improvement. React reduces the overall processing cost by comparing the Virtual DOM rather than directly modifying the browser DOM. This minimizes the amount of updates required. React can effectively update only the portions of the website that need to be updated thanks to this method, which leads to faster rendering and a more responsive user experience.




Ques 4:

Two distinct categories of database management systems, MySQL and NoSQL, each have unique properties. Among the main distinctions between NoSQL, a non-relational database management system, and MySQL, a relational database management system, are as follows:

Data Model: Data is organized into tables with specified schemas and relationships between tables in MySQL's structured, tabular data model, which is based on SQL (Structured Query Language). The usage of many data models in NoSQL databases, such as key-value pairs, document-based, columnar, or graph-based, allows for greater flexibility when managing unstructured or semi-structured data.

Schema: Prior to inserting data into a MySQL database, the structure of the tables and the connections between them must be established. NoSQL databases lack a predefined schema, allowing for flexible and dynamic data structures.

Scalability: Most MySQL databases are vertically scalable, which means that new hardware on a single server can manage higher workloads. NoSQL databases are built for horizontal scalability, which enables them to handle massive data volumes and heavy traffic loads by distributing the data across several servers, especially those built on distributed systems.

Query Language: MySQL uses SQL as its query language, providing a standardized and powerful language for retrieving, manipulating, and managing data. NoSQL databases often have their own query languages, which may differ between database types. Some NoSQL databases also provide support for SQL-like querying.


Data Integrity and Transactions: MySQL upholds the ACID (Atomicity, Consistency, Isolation, Durability) principles to guarantee solid data integrity. It supports transactions, which ensure that several database operations are carried out as a single action, preserving data consistency. NoSQL databases could provide weaker consistency models because they place more emphasis on performance and scalability than on rigid consistency requirements. With certain trade-offs, some NoSQL databases offer eventual consistency or transactional functionality.

Employ Cases: Applications that need structured and relational data, such e-commerce, content management systems, and financial systems, frequently employ MySQL. NoSQL databases are frequently used for applications demanding high levels of scalability and flexibility, real-time analytics, content delivery networks, and handling massive amounts of unstructured or semi-structured data.





Ques 5:
Data is saved as documents since MongoDB is a document-oriented database. The data types that can be contained in documents include objects, arrays, strings, numbers, and JSON objects. Documents are comparable to JSON objects. The data types of the fields in a document can be altered at runtime because MongoDB does not have a rigid structure.

Applications that require unstructured data can benefit from MongoDB. For instance, MongoDB is frequently used to store data from IoT, e-commerce, and social media apps. For applications that need to be able to scale horizontally, MongoDB is a great choice.


The following are some benefits of utilizing MongoDB:

Flexible schema: MongoDB's flexible schema makes it simple to store and modify data.
Scaling horizontally: MongoDB can be readily expanded to handle more data because it has this capability.
Performance: MongoDB is a high-performance database that has a high request-to-answer ratio.
Document-oriented: MongoDB's document-oriented data model makes it simple to query and store complicated data.

The following are a few drawbacks of utilizing MongoDB:

Lack of a common query language: MongoDB lacks a common query language, which might make it challenging to understand and utilize.
MongoDB is a more recent database system, and it is less developed than MySQL.


