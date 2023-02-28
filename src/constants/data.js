import images from "./images"; // },[])

// function fetchdata(){
//     fetch("http://192.168.50.91:5001/api/coins",{
//         method:"GET",
//         headers: {
//         //     Accept:"application/json"
//         // }

//     }).then(response => response.json()).then(response =>{
//         console.log(response)

//     })
// }
// useEffect(()=>{
//     fetchdata()
const data = {
  user: {
    name: "Admin Name",
    img: images.avt,
  },
  summary: [
    {
      title: "Bit Coin",
      subtitle: "Total sales today",
      value: "$1.000",
      percent: 70,
    },
    {
      title: "Ether",
      subtitle: "Total orders today",
      value: "3000",
      percent: 49,
    },
    {
      title: "Revenue",
      subtitle: "Total revenue today",
      value: "$678",
      percent: 38,
    },
    {
      title: "Visits",
      subtitle: "Total visits today",
      value: "2345",
      percent: 55,
    },
  ],
  revenueSummary: {
    title: "Revenue",
    value: "$678",
    chartData: {
      labels: ["May", "Jun", "July", "Aug", "May", "Jun", "July", "Aug"],
      data: [300, 300, 280, 380, 200, 300, 280, 350],
    },
  },
  overall: [
    {
      value: "300K",
      title: "Coin",
    },
    {
      value: "9.876K",
      title: "Total User",
    },
    {
      value: "1.234K",
      title: "Products",
    },
    {
      value: "$5678",
      title: "Revenue",
    },
  ],
  revenueByChannel: [
    {
      title: "Direct",
      value: 70,
    },
    {
      title: "External search",
      value: 40,
    },
  ],
  revenueByMonths: {
    labels: [
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
    ],
    data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350],
  },
};

export default data;
