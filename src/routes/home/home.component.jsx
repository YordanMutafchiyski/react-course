import Directory from "../../components/directory/directory.component";

const Home = ()=>{
    const categories = [
        {
          id: 1,
          title: "Hats",
          imageUrl: 'https://shop.msg.com/cdn/shop/products/MSGBMH0053C.jpg?v=1648065208',
        },
        {
          id: 2,
          title: "Jackets",
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        },
        {
          id: 3,
          title: "Sneakers",
          imageUrl: 'https://media.voguebusiness.com/photos/60140c47d3d19b7432dd2ea9/2:3/w_2560%2Cc_limit/sneakers-sustainability-voguebus-janine-abrenilla-jan-21-story.jpg',
        },
        {
          id: 4,
          title: "Womens",
          imageUrl:'https://i.ibb.co/GCCdy8t/womens.png'
        },
        {
          id: 5,
          title: "Mens",
          imageUrl: 'https://media.istockphoto.com/id/1214561965/photo/young-man-in-shopping-looking-for-presents-consumerism-fashion-lifestyle-concept.jpg?s=612x612&w=0&k=20&c=G1n6f4oQ6om156yTJgdKiQ8_Mn6KqtKAHHXDY0-4f3Q='
        },
      ];
      return (       
          <Directory categories={categories}></Directory>
      );
}


export default Home;