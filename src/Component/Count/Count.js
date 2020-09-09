import React from "react";
import "./count.css";

const Count = props => {
  let salary = 0;
  const count = props.count;
  console.log(count);
  //   const totalSalary = count.map(count => {
  //     let s = parseInt(count.salary);
  //     salary = Number(s + salary);
  //     return salary;
  //   });

  const totalSalary = count.reduce(
    (total, count) => total + parseInt(count.salary),
    0
  );
  return (
    <div className="count">
      <div className="container ">
        <div className="text-center">
          <h5 className="mt-2">Friends Income</h5>
          <hr />
          <h6>Friends Added : {count.length}</h6>
          <br />
        </div>
        {count.map(c => (
          <div className="row align-items-center count-item">
            <div className="col-md-6">
              <div>
                <img className="" src={c.image} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="desc">
                <p>
                  <b>{c.name}</b>
                </p>
                <p>
                  Salary : <b>${c.salary}</b>
                </p>
              </div>
            </div>
          </div>
        ))}
        <div>
          <hr />
          <h5 className="text-success">Total salary : ${totalSalary}</h5>
        </div>
      </div>
    </div>
  );
};

export default Count;
