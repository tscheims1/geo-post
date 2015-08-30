Meteor.startup(function()
{
    var posts = 
    [
    {title:'oslo',text:'frammuseumtour in oslo',lat:0.0,lng:0.0},
    {title:'walen in sto',text:'frühmorgens stiegen wir auf einen kutter',lat:0.0,lng:0.0}
    ];
    for(var i =0; i < posts.length; i++)
    {
     if(!Posts.findOne(posts[i]))
         Posts.insert(posts[i]);
    }
    
});