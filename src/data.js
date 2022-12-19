import img1 from './components/images/golf.webp';
import img2 from './components/images/base ball.png';
import img3 from './components/images/soccer.png';
import img4 from './components/images/csac.png';



const data = {
    cardDate:[
        {
            id:1,
            img:img1,
            title:'GOLF CLUB',
            desc: 'Golf game is competitve but realxing and fun.We will have 3 tournaments in each cycle and allows students to register and participate.',
            link: <a href='/ClubDetail'>Learn More</a>
        },
        {
            id:1,
            img:img2,
            title:'BASE BALL CLUB',
            desc: 'Base Ball has total 9 innings and each divided into two halves. Its fun anf exciting club with lots of team participation.',
            link: <a href='/ClubDetail'>Learn More</a>
        },
        {
            id:1,
            img:img3,
            title:'SOCCER CLUB',
            desc: 'moving the ball up the pitch and beyond the goal, such a enjoyful game to participate and spend some time relaxing.',
            link: <a href='/ClubDetail'>Learn More</a>
        },
        {
            id:1,
            img:img4,
            title:'CSAC CLUB',
            desc: 'Civil Services Aspirant Club aims to create common platform for student in the field of CSE. Clubs has weekly group diwscussion on topics with current affairs.Also arranges expert lectures and guidance lectures by bureaucrats. ',
            link: <a href='/ClubDetail'>Learn More</a>
        },


    ]
}
export default data;