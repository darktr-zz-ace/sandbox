==================================
Remarker: the Server Side (Grails)
==================================
Bee Sharwood - last editted 31 Jan 2012


========
Contents
========
1. How to use
2. Custom methods (client-side interaction)
3. Unimplimented ideas


=============
1. How To Use
=============
The back-end is largely uncustomised, Grails-generated code.
If browsed to, the app should redirect to the "List" view for the tags.

=================
2. Custom Methods
=================
There are clones of the CRUD operations in the tag controller, 
with the prefix "remote". These are for the use of the client-side javascript, 
and perform the usual operations, but redirect to the "remoteList" view, which 
is neatly enclosed in a javascript function for the client-side code to retrieve.

======================
3. Unimplemented Ideas
======================
- User logins: 	the authorisation was quite confusing and we judged it
				too difficult to implement in the limited time remaining
- Editting/Deleting tags:	the remote update/delete methods exist on this side,
							but they're not being used on the client-side because
							lack of log-ins makes tag editting impractical.
- Marking as done:	similarly, we didn't end up adding the "marked as done/resolved"