exports.getindex = (req,res,next)=>{

        res.render('portofolio/index', {
            pageTitle: 'ashalaby',
            path: '/',
       });

}