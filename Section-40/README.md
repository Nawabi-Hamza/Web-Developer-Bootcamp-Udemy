


<!-- concept of middle ware -->

# Express Middleware 
### are functions that run during the request/response lifecycle
<!-- ### can perform tasks such as authentication, logging, caching, etc. -->
### middleware are just functions
### each middleware has acces to the request and response objects
### middleware can end the HTTP request by sending back a response with methods like res.send()
### middleware can be chained together. one after another by calling next()