Router.route("/post/:_id",
    function()
    {
        var item = Posts.findOne({_id:this.params._id});
        this.render('single',{data:item});
    }
);
