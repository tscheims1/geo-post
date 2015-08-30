  Template.overview.helpers({
    posts: Posts.find()
  });
  
  Template.overview.events(
    {
        "click .post-overview":function(event)
        {
            event.preventDefault();
            alert("open new page");
        }
    });
  
  