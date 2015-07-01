# Things I learned pulling apart WorldCat Discovery's query string #

## A super simple WorldCat Discovery searchform ##

```html
<form action="http://{{ your institution's WCD name}}.on.worldcat.org/search" method="get">
  <input type="text" name="queryString" placeholder="Search using WorldCat Discovery"/>
  <button type="submit">Search!</button>
</form>
```

The only thing absolutely required in the search query is a `queryString` field. This will always default to
a keyword search, but you are able to use the [expert searching](es) indexes to get more-exacting results (like
`au:King, Stephen` or `ti:Ulysses`). 



## Scoping to your institution ##

To get the value for this, you'll have to do a little hunting. Conduct a Discovery search scoped to your location
using the checkbox toggles/filters on the left. Copy and paste the resulting url into Notepad (or whatever) and look 
for `&scope={{some letters and numbers}}&`. It might look something like `wz%3A526` (which is wz:526 url-encoded).
Using this value ([url-decoded](urldecode), of course) in a hidden input within your form will scope the requests
to your institution, as opposed to 'Libraries Worldwide'. In WorldCat Local, I believe this value was either a `1` or 
a `0`.

### Example ###

```html
<form action="http://muhlenberg.on.worldcat.org/search" method="get">
  <input type="text" name="queryString" placeholder="Search our collection"/>  
  <input type="hidden" name="scope" value="wz:526"/>
  <button type="submit">Go</button>
</form>
```




[es]: http://www.oclc.org/support/services/worldcat-local/documentation/expert_examples_WorldCat_Local.en.html
[urldecode]: http://urldecode.org