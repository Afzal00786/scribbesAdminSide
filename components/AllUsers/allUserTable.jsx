import React from "react";
import Table from "react-bootstrap/Table";
import au from "../../Asstes/style/allUser.module.css";
import Image from "next/image";
import profile2 from "../../Asstes/DashboardImages/profile2.png";
import checkMark from "../../Asstes/DashboardImages/checkMark.png";
import edit from "../../Asstes/DashboardImages/edit.png";
import error from "../../Asstes/DashboardImages/error.png";
import delte from "../../Asstes/DashboardImages/delte.png";
import q from "../../Asstes/DashboardImages/q.png";
import preArrow from "../../Asstes/DashboardImages/preArrow.png";
import nextArrow from "../../Asstes/DashboardImages/nextArrow.png";
import Link from "next/link";

const AllUserTable = () => {
  const tableData = [
    {
      name: "John Doe",
      mark: true,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
      issue: error,
    },
    {
      name: "John Doe",
      mark: true,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
      issue: q,
    },
    {
      name: "John Doe",
      mark: false,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
  
    },
    {
      name: "John Doe",
      mark: true,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: true,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",

    },
    {
      name: "John Doe",
      mark: false,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",

    },
    {
      name: "John Doe",
      mark: false,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
  
    },
    {
      name: "John Doe",
      mark: false,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
  
    },
    {
      name: "John Doe",
      mark: false,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
 
    },
    {
      name: "John Doe",
      mark: false,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
 
    },
    {
      name: "John Doe",
      mark: false,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",

    },
  ];
  return (
    <>
    <div className="table_scrol_contoler">


      <div className={au.allUser_main_box}>
        <Table className="all-user-table"  responsive>
          <thead>
            <tr className="h-[50px] 2xl:h-[60px]">
              <th>
                <div className="h-[25px] 2xl:h-[30px] font-DM">Name</div>
              </th>
              <th>
              <div className="h-[25px] 2xl:h-[30px] font-DM">Contact</div>
              </th>
              <th>
              <div className="h-[25px] 2xl:h-[30px] font-DM">IP Address</div>
              </th>
              <th>
              <div className="h-[25px] 2xl:h-[30px] font-DM">Id</div>
              </th>
              <th>
              <div className="h-[25px] 2xl:h-[30px] font-DM">Status</div>
              </th>
              <th>
              <div className="h-[25px] 2xl:h-[30px] font-DM">Country</div>
              </th>
              <th>
              <div className="h-[25px] 2xl:h-[30px] font-DM">Action</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data,index) => {
              return (
                <>
                <Link href="/users/user-information">
                  <tr className={index %2 !=0?au.table_row2: au.table_row}>
                    <td className="w-[200px] 2xl:w-[250px] ">
                      <div className={au.table_name}>
                        <div className={data.check==true?au.table_Active_checBox: au.table_checBox}></div>
                        <div className={au.table_name_inner}>
                          <div className={au.check_mark}>
                            {data.mark && <Image src={checkMark} />}
                          </div>
                          <Image src={profile2} />
                          {data.name}
                        </div>
                      </div>
                    </td>
                    <td className="font-DM text-sm 2xl:text-base font-normal">
                      <div>{data.email}</div>
                      <div>{data.phone}</div>
                    </td>
                    <td className="font-DM text-sm 2xl:text-base font-normal">
                      <div className="pt-[10px]">{data.ip}</div>
                    </td>
                    <td className="font-DM text-sm 2xl:text-base font-normal">
                      <div className="pt-[10px]">{data.id}</div>
                    </td>
                    <td className="font-DM text-sm 2xl:text-base font-normal">
                      <div className="pt-[10px]">{data.status}</div>
                    </td>
                    <td className="font-DM text-sm 2xl:text-base font-normal">
                      <div className="pt-[10px]">{data.country}</div>
                    </td>
                    <td>
                      <div className="pt-[10px] flex items-center gap-[15px] 2xl:gap-8">
                        <div className="flex gap-3 2xl:gap-4 items-center">
                          <div className="cursor-pointer">
                            <Image src={edit} />
                          </div>
                          <div className="cursor-pointer">
                            <Image src={delte} />
                          </div>
                        </div>
                        <div className="cursor-pointer">
                          <Image src={data?.issue} />
                        </div>
                      </div>
                    </td>
                  </tr>
                  </Link>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
      </div>
      <div className={au.pagination_wrap}>
        <div className="text-[#BCBCBC] font-DM text-base 2xl:text-[20px]">Showing 5 to 10 of 50 entries</div>
        <div className={au.paginatio_box}>
          <Image src={preArrow} />
          <div>1</div>
          <div className={au.active_page_count}>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>....</div>
          <div>9</div>
          <div>next</div>
          <Image src={nextArrow} />
        </div>
        <div className="w-[50px] lg:w-[100px] 2xl:w-[300px]"></div>
      </div>
    </>
  );
};

export default AllUserTable;
