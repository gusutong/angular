import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
class Course{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public task:number,
        public person:number){

    }
}

const course = [
    new Course(1,'混合应用','http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130',10,90),
    new Course(2,'JavaScript', 'http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130', 23, 100),
    new Course(3,'H5', 'http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130', 15, 97),
    new Course(4,'数据结构', 'http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130', 30, 99),
]
app.get('/api', (req, res) => {
    res.json(course);
});
app.get('/api/course/:id', (req, res) => {
    // req.params 表示请求的是那个id 在下列的res进行判断
    res.json(course.filter((ele)=>ele.id == req.params.id));
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(course);
})
app.listen(8080);
