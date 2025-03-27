import React, { useState } from "react";
import { Select } from "antd";

const { Option } = Select;

const WithdrawApplication = () => {
  const [activeTab, setActiveTab] = useState("bank");

  return (
    <div className="ctnr">
      <div className="WithdrawApplication">
        <div className="list-withdraw-header">
          <div
            className={`item-withdraw-header ${activeTab === "bank" ? "active" : ""}`}
            onClick={() => setActiveTab("bank")}
          >
            <div className="icon-banking"></div>
            <span>Ngân hàng</span>
          </div>
          <div
            className={`item-withdraw-header ${activeTab === "usdt" ? "active" : ""}`}
            onClick={() => setActiveTab("usdt")}
          >
            <div className="icon-banking"></div>
            <span>USDT</span>
          </div>
        </div>

        <div className="withdraw-content">
          {activeTab === "bank" && (
            <form>
              <div className="item-label-bank">
                <p>Ngân hàng</p>
                <Select defaultValue="TRC200">
                  <Option value="TRC200">TRC200</Option>
                </Select>
              </div>

              <div className="item-label-bank">
                <p>Chi nhánh ngân hàng</p>
                <input placeholder="" />
              </div>

              <div className="item-label-bank">
                <p>Số tài khoản</p>
                <input placeholder="Ví dụ：6227002020690175526" />
              </div>

              <div className="btn-bank">
                <button type="submit">Gửi đi</button>
              </div>
            </form>
          )}

          {activeTab === "usdt" && (
            <form>
              <div className="item-label-bank">
                <p>Chuỗi Giao Dịch</p>
                <Select defaultValue="TRC200">
                  <Option value="TRC200">TRC200</Option>
                </Select>
              </div>

              <div className="item-label-bank">
                <p>Địa chỉ ví</p>
                <input placeholder="" />
              </div>

              <div className="btn-bank">
                <button type="submit">Gửi đi</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default WithdrawApplication;
