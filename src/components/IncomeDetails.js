import React from "react";
import { useAccountContext } from "../hooks/useAccountContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { toast } from "react-toastify";
import { MdDeleteForever } from "react-icons/md";

const IncomeDetails = ({ account }) => {
    const { dispatchTwo } = useAccountContext();

    const handleClick = async () => {
        const response = await fetch("/api/accounts/" + account._id, {
            method: "DELETE",
        });
        const json = await response.json();

        if (response.ok) {
            dispatchTwo({ type: "DELETE_ACCOUNT", payload: json });
        }
    };

    const income = () => toast("income deleted");
    return (
        <div className="account-details">
            <h4>{account.category}</h4>
            <p>
                <strong>Amount $</strong>
                {account.amount}
            </p>
            <p>
                {formatDistanceToNow(new Date(account.createdAt), {
                    addSuffix: true,
                })}
            </p>

            <span
                className="account-delete-icon"
                onClick={() => {
                    handleClick();
                    income();
                }}
            >
                <MdDeleteForever />
            </span>
        </div>
    );
};

export default IncomeDetails;
