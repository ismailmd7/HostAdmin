import React from "react";
import { useState, useEffect } from "react";
import "./Coin.css";

function Coin() {
  const [value, setvalue] = useState([]);
  const [newvalue, Setnewvalue] = useState(true);
  const [textnewvalue, settextnewvalue] = useState("");
  const [updatevalue, setupdatevalue] = useState();
  const [idvalue, setidvalue] = useState("");
  const [placeholder, setplaceholder] = useState({});
  const [coinname, setcoinname] = useState(placeholder.coinname);
  const [cent_sent_api, setcent_sent_api] = useState(placeholder.cent_sent_api);
  const [currency, setcurrency] = useState(placeholder.currency);
  const [decentcreate, setdecentcreate] = useState(placeholder.decentcreate);
  const [updatelogo, setupdatelogo] = useState(placeholder.logo);
  const [status1, setstatus1] = useState({});
  const [currentstatus, setcurrentstatus] = useState("statuscurrent");
  const [currentstatus2, setcurrentstatus2] = useState();
  // for add data in database
  const [addcoin_name, setaddcoin_name] = useState("");
  const [adddecn_sent_api, setadddecn_sent_api] = useState("");
  const [addcurrency, setaddcurrency] = useState("");
  const [addcent_sent_api, setaddcent_sent_api] = useState("");
  const [addlogo, setaddlogo] = useState("");
  const [xxlid, setxxlid] = useState("");
  const [xxlsetvalue, setthexxlvalue] = useState({
    names: "",
    content: "",
  });

  function fetchdata() {
    fetch("https://crypto-wallet-jet.vercel.app/api/coins", {
      method: "GET",

      headers: {
        accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setvalue(data);
        setstatus1(data[0].status);
      });
  }

  useEffect(() => {
    fetchdata();
  }, []);
  console.log(value);
  function clickthevalue(res) {
    // alert(res);
    Setnewvalue(false);
    setidvalue(res);
  }
  function changethedata(event) {
    settextnewvalue(event.target.value);
  }
  function changetheupdatevalue(id) {
    fetch(`https://crypto-wallet-jet.vercel.app/api/coins/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      // body:JSON.stringify({
      //   coin_name:"hello",
      // }),
      body: JSON.stringify({
        coin_name: coinname,
        decn_sent_api: decentcreate,
        cent_sent_api: cent_sent_api,
        currency: currency,
        logo: updatelogo,
      }),
    }).then((res) => fetchdata());
    // .then((data) => {
    //   console.log(data);
    //   setvalue(data);
    // });
  }
  console.log(textnewvalue);
  console.log(idvalue);
  console.log(placeholder);
  function value1(event) {
    setcoinname(event.target.value);
  }
  function value2(event) {
    setcent_sent_api(event.target.value);
  }
  function value3(event) {
    setcurrency(event.target.value);
  }
  function value4(event) {
    setdecentcreate(event.target.value);
  }
  function Value5(event) {
    setupdatelogo(event.target.value);
  }
  console.log(coinname);

  function statuschange() {
    if (status1.status == 1) {
      return "active";
    }
    if (status1.status == 0) {
      return "inactive";
    }
  }

  function changetheupdatevalue1(id) {
    fetch(`https://crypto-wallet-jet.vercel.app/api/coins/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      // body:JSON.stringify({
      //   coin_name:"hello",
      // }),

      body: JSON.stringify({
        status: currentstatus2,
      }),
    }).then((data) => fetchdata());
  }

  function pressthestatuschanged(res) {
    if (res == 1) {
      setcurrentstatus("Active");
      setcurrentstatus2(1);
    }
    if (res == 0) {
      setcurrentstatus("Inactive");
      setcurrentstatus2(0);
    }
  }
  console.log(xxlsetvalue.content);

  // for add data in database

  function add1(event) {
    setaddcoin_name(event.target.value);
  }
  function add2(event) {
    setadddecn_sent_api(event.target.value);
  }
  function add3(event) {
    setaddcurrency(event.target.value);
  }
  function add4(event) {
    setaddcent_sent_api(event.target.value);
  }
  function add5(event) {
    setaddlogo(event.target.value);
  }

  function addcoin() {
    fetch("https://crypto-wallet-jet.vercel.app/api/coins", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        coin_name: addcoin_name,
        logo: addlogo,
        currency: addcurrency,
        cent_sent_api: addcent_sent_api,
        decn_sent_api: adddecn_sent_api,
      }),
    }).then((response) => fetchdata());
  }
  function changethenewxxlvalue2(event) {
    // setthexxlvalue(event.target.files[0]);
    var file = event.target.files[0];
    // let reader = new FileReader()
    // reader.readAsDataURL(file)
    // reader.onload = () => {
    //   setthexxlvalue({value:reader.result})

    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      setthexxlvalue({ names: file.name, content: reader.result });
    };
  }

  //  function submitthexxlvalue(res){
  //   fetch(`https://crupto-wallet-qec8.vercel.app/api/coins/${res}`, {
  //     headers: {
  //       'Content-Type': "application/json",
  //     },
  //     method: "POST",
  //     // body:JSON.stringify({
  //     //   coin_name:"hello",
  //     // }),

  //     body: JSON.stringify({

  //     }),

  //   }).then((data)=>fetchdata())

  // }

  //  }
  console.log(xxlsetvalue);
  function changetheupdatevaluedata(res) {
    // const fromdata = new FormData();
    // fromdata.append("file", xxlsetvalue);

    fetch(`http://localhost:5001/api/coins/coins_address/${res}`, {
      headers: {
        "Content-Type": "text/csv",
      },
      method: "POST",
      // body:JSON.stringify({
      //   coin_name:"hello",
      // }),

      body: xxlsetvalue.value,
    }).then((data) => fetchdata());
  }
  console.log(xxlid);

  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal2"
      >
        Add Coin
      </button>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Sl. No</th>
            <th scope="col">Logo</th>
            <th scope="col">Coin Name</th>
            <th scope="col">Currency</th>
            <th scope="col">Status</th>
            <th scope="col">update </th>
            <th scope="col">Status Update</th>
            <th scope="col">Exel File Add</th>
          </tr>
        </thead>
        <tbody>
          {value.map(function (caaavalue, index) {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>
                  <img src={caaavalue.logo} id="image"></img>
                </td>
                <td>{caaavalue.coin_name} </td>
                <td>{caaavalue.currency} </td>
                <td>{caaavalue.status}</td>

                <td>
                  {/* <button onClick={()=>{changetheupdatevalue(caaavalue._id)}}>Update</button> */}
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() =>
                      setplaceholder({
                        coinname: caaavalue.coin_name,
                        decn_sent_api: caaavalue.decn_sent_api,
                        cent_sent_api: caaavalue.cent_sent_api,
                        currency: caaavalue.currency,
                        id: caaavalue._id,
                        logo: caaavalue.logo,
                      })
                    }
                  >
                    Update
                  </button>
                </td>

                <td>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                    onClick={() =>
                      setstatus1({
                        status: caaavalue.status,
                        id: caaavalue._id,
                      })
                    }
                  >
                    Status
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal4"
                    onClick={() => setxxlid(caaavalue._id)}
                  >
                    Add File
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                placeholder={placeholder.coinname}
                value={coinname}
                onChange={value1}
              />
              <input
                type="text"
                placeholder={placeholder.decn_sent_api}
                onChange={value4}
                value={decentcreate}
              />
              <input
                type="text"
                placeholder={placeholder.cent_sent_api}
                onChange={value2}
                value={cent_sent_api}
              />
              <input
                type="text"
                placeholder={placeholder.currency}
                onChange={value3}
                value={currency}
              />
              <input
                type="text"
                placeholder={placeholder.logo}
                onChange={Value5}
                value={updatelogo}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => changetheupdatevalue(placeholder.id)}
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {/* <input type="text" placeholder={statuschange()}/> */}
              <p>{statuschange()}</p>

              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-danger dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {currentstatus}
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => pressthestatuschanged(1)}
                    >
                      Active
                    </a>
                  </li>
                  <li onClick={() => pressthestatuschanged(0)}>
                    <a class="dropdown-item" href="#">
                      Inactive
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => changetheupdatevalue1(status1.id)}
                data-bs-dismiss="modal"
              >
                status changed
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                placeholder="coin_name"
                value={addcoin_name}
                onChange={add1}
                required
              />
              <input
                type="text"
                placeholder="cent_sent_api"
                value={addcent_sent_api}
                required
                onChange={add4}
              />
              <input
                type="text"
                placeholder="decn_sent_api"
                value={adddecn_sent_api}
                onChange={add2}
                required
              />
              <input
                type="text"
                placeholder="currency"
                value={addcurrency}
                onChange={add3}
                required
              />
              <input
                type="text"
                placeholder="logo"
                value={addlogo}
                required
                onChange={add5}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={addcoin}
                data-bs-dismiss="modal"
              >
                add coin
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal4"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input type="file" onChange={changethenewxxlvalue2} />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => changetheupdatevaluedata(xxlid)}
              >
                Submit xxlfile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coin;
