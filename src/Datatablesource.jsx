export const userColums = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellimg" src={params.row.age} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field:"email",headerName: "Email",width:230,
  },
  {
    field:"age",headerName: "Age",width:100,
  },
  {
    field:"status",headerName: "Status",width:160,
    renderCell:(params)=>{
      return(
        <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
      )
    }
  }
];

export const userRows = [
  {
    id: 1,
    username: "John Doe",
    img: "https://source.unsplash.com/random/100x100/?avatar,man",
    email: "john.doe@example.com",
    status: "Active",
    age: 28,
  },
  {
    id: 2,
    username: "Alice Johnson",
    img: "https://source.unsplash.com/random/100x100/?avatar,woman",
    email: "alice.johnson@example.com",
    status: "Inactive",
    age: 32,
  },
  {
    id: 3,
    username: "Robert Brown",
    img: "https://source.unsplash.com/random/100x100/?avatar,boy",
    email: "robert.brown@example.com",
    status: "Active",
    age: 25,
  },
  {
    id: 4,
    username: "Emma Davis",
    img: "https://source.unsplash.com/random/100x100/?avatar,girl",
    email: "emma.davis@example.com",
    status: "Pending",
    age: 29,
  },
  {
    id: 5,
    username: "Michael Smith",
    img: "https://source.unsplash.com/random/100x100/?avatar,oldman",
    email: "michael.smith@example.com",
    status: "Active",
    age: 35,
  },
  {
    id: 6,
    username: "Sophia Wilson",
    img: "https://source.unsplash.com/random/100x100/?avatar,woman,face",
    email: "sophia.wilson@example.com",
    status: "Inactive",
    age: 27,
  },
  {
    id: 7,
    username: "David Miller",
    img: "https://source.unsplash.com/random/100x100/?avatar,man,beard",
    email: "david.miller@example.com",
    status: "Active",
    age: 30,
  },
  {
    id: 8,
    username: "Olivia Martinez",
    img: "https://source.unsplash.com/random/100x100/?avatar,girl,smile",
    email: "olivia.martinez@example.com",
    status: "Pending",
    age: 26,
  },
  {
    id: 9,
    username: "William Anderson",
    img: "https://source.unsplash.com/random/100x100/?avatar,man,glasses",
    email: "william.anderson@example.com",
    status: "Active",
    age: 33,
  },
  {
    id: 10,
    username: "Emily White",
    img: "https://source.unsplash.com/random/100x100/?avatar,woman,glasses",
    email: "emily.white@example.com",
    status: "Inactive",
    age: 31,
  },
];

export default userRows;
