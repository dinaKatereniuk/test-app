# CompanyBlog

## Task requirements:

At Company&Co employees love sharing about their work experience. However the company doesn't have any digital solution for this purpose. 
The director of the company decided to recruit you in order to full fill their needs.
The director ask the employees what would be needed in this application. He gathered the following requirements:
* As a user I should see the home page of the company when I navigate to the application
* As a user I should be able to login in order to have access to the different features of the app.
* As a user I should be able to refresh the page without having to login again.
* As a user I should have a solution to loggout easily.
* As a loggged in user I want to be able to see the different posts made in the company.
* As a user I should be able to create a new post.
* (Bonus) The user should be able to see the comments of a post.
* As a user I should be able to delete a posts.
* (Bonus) The user can only delete it's own posts.
* Any errors should be handled by informing the user with a suitable


Please use [this free fake API](https://jsonplaceholder.typicode.com) to fetch available posts and manage posts.
* GET:	/posts
* GET:	/posts/{id}
* GET:	/posts/{id}/comments
* POST:	/posts 
* DELETE:	/posts/{id}

There is `AuthMockService` in the shared folder. Please use it to simulate the authentication flow.

- All above tasks (Bonus included) are completed.
* before starting an app run json-server --watch db.json in cd src/asset/static 
