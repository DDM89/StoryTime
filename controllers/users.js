
const express = require('express');
const {ObjectId} = require("mongodb");
const router = express.Router();

router.get('/', (req, res) => {
    // TODO: Move this logic to models
    req.db.production.collection('users').find().toArray((err, docs) => {
        const storyInfo = docs.map((info)=> {
            return {
                name:info.name,
                title:info.stories.map((s)=> {return s.title}),
                genre:info.stories.map((s)=> {return s.genre}),
                story:info.stories.map((s)=> {return s.body})
            }
        })
        res.json(storyInfo);
    })
});

router.post('/', (req, res) => {
    // console.log(req.body)
    req.db.production.collection('users').insertOne({name:req.body.name, email: req.body.email,
         passwordHash: req.body.password ,
          stories: [{title: 'Something', genre: 'Triller', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquid, repudiandae voluptatem a voluptatum quaerat quasi alias, minus iure excepturi aspernatur quibusdam nobis inventore reiciendis tenetur iste laboriosam pariatur nihil ducimus praesentium earum cupiditate obcaecati architecto nesciunt! Quam quod alias ullam harum! Provident doloribus, earum atque enim ipsam deserunt at sint repudiandae beatae non veniam architecto necessitatibus ipsum assumenda expedita eaque recusandae modi corporis consequuntur. Temporibus doloribus dolorum possimus neque hic ab provident dignissimos magnam exercitationem nam ut aliquid nemo assumenda praesentium, excepturi quis accusantium nostrum, iure inventore libero quasi odio beatae dolorem! Ducimus ut qui nihil minus commodi ipsam.'}], comments:[{name: 'Editor of All Books', comment: 'This is the best thing I have ever read!'}]});
    res.json({ message: 'logged in successfully'})
});

router.post('/addStory', (req, res) => {
    console.log(req.body.story)
    req.db.production.collection('users').updateOne({name:"Daniel Nilsen-Murphy"}, {$push: { stories: {title: 'Fluffy', genre: 'Horror', body: req.body.story}}});
    
    res.json({ message: 'logged in successfully'})
});

module.exports = router;