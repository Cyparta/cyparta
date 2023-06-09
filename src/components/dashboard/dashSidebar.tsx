import React, { useRef, useState } from "react";
import {
    Box,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import NestedList from "./nestedList";
// import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
import Link from "next/link";
const logo = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 241.932 93.202"
    >
        <g id="logo_1_" data-name="logo (1)" transform="translate(-77.31 -71.38)">
            <g id="Group_23" data-name="Group 23" transform="translate(77.31 71.38)">
                <g id="Group_21" data-name="Group 21" transform="translate(167.063)">
                    <path
                        id="Path_37788"
                        data-name="Path 37788"
                        d="M850.3,100.1l-5.674,3.177-6.485-3.024s-1.227-21.777-3.767-25.939l3.024-1.227,1.971,4.512-.877-4.994,3.2-.527.647,4.162.317-4.863,3.111.176-.219,5.389L847.206,72l3.09.745-1.775,5.345L851.764,73l2.5.919S849.836,95.042,850.3,100.1Z"
                        transform="translate(-823.415 -71.38)"
                        fill="#ed2027"
                    />
                    <path
                        id="Path_37789"
                        data-name="Path 37789"
                        d="M816.787,160.46v8.674l-7.8,4.381-8.414-3.68V160.46s-12.618,4.731-12.794,14.459v19.19a64.691,64.691,0,0,1,2.1,13.408,36.757,36.757,0,0,0,14.9,16.561V195.337c-9.2-.964-13.319-4.294-13.319-4.294v-6.836a36.033,36.033,0,0,0,34.439,0v6.836s-4.117,3.33-13.318,4.294v28.742s9.638-5.7,14.459-15.16c0,0,1.227-11.83,2.542-15.16V175.443S829.669,165.367,816.787,160.46Z"
                        transform="translate(-787.78 -139.513)"
                        fill="#fff"
                    />
                </g>
                <g id="Group_22" data-name="Group 22" transform="translate(0 46.354)">
                    <path
                        id="Path_37790"
                        data-name="Path 37790"
                        d="M107.945,295.514q-3.115,4.324-5.714,5.777a12.066,12.066,0,0,1-6,1.456,13.153,13.153,0,0,1-6.963-1.853,11.4,11.4,0,0,1-4.571-5.328,20.428,20.428,0,0,1-1.517-8.214,25.061,25.061,0,0,1,1.608-9.6,11.006,11.006,0,0,1,10.7-7.388,11.1,11.1,0,0,1,7.1,2.342q2.959,2.342,4.557,7.67h.8l-.8-11.865h-.9a4.045,4.045,0,0,1-.952,1.931,1.709,1.709,0,0,1-1.211.489,4.087,4.087,0,0,1-1.545-.567,16.43,16.43,0,0,0-7.466-1.853,17.431,17.431,0,0,0-8.971,2.406,16.953,16.953,0,0,0-6.448,6.784,20,20,0,0,0-2.344,9.6,18.4,18.4,0,0,0,3.553,11.275q4.762,6.437,13.438,6.436a15.508,15.508,0,0,0,8.315-2.161,18.331,18.331,0,0,0,6.128-6.822Z"
                        transform="translate(-77.31 -268.51)"
                        fill="#fff"
                    />
                    <path
                        id="Path_37791"
                        data-name="Path 37791"
                        d="M245.476,271.91v.952a5.2,5.2,0,0,1,2.086.322,2.488,2.488,0,0,1,1.068.889A2.279,2.279,0,0,1,249,275.36a7.958,7.958,0,0,1-1.545,3.6l-6.847,10.76-7.285-11.249a8.122,8.122,0,0,1-1.571-3.348,1.828,1.828,0,0,1,1.016-1.7,4.487,4.487,0,0,1,2.227-.567h.774v-.952H220.84v.952a3.473,3.473,0,0,1,1.493.256,9.076,9.076,0,0,1,2.509,1.545,30.928,30.928,0,0,1,2.3,3.219l9.577,14.621v8.263q0,2.935-.567,3.76a3.551,3.551,0,0,1-3.142,1.338h-1.235v.952h14.828v-.952h-1.133a3.968,3.968,0,0,1-3.09-1.082q-.72-.8-.72-4.016v-8.752l8.416-13.257a23.229,23.229,0,0,1,2.6-3.6,7.661,7.661,0,0,1,2.342-1.7,5.257,5.257,0,0,1,1.956-.593h.67v-.952Z"
                        transform="translate(-187.09 -271.111)"
                        fill="#fff"
                    />
                    <path
                        id="Path_37792"
                        data-name="Path 37792"
                        d="M409.137,276.121a10.179,10.179,0,0,0-4.555-3.257,22.732,22.732,0,0,0-7.388-.964H384.4v.952h1.312a3.785,3.785,0,0,1,2.986,1.133q.695.8.7,4.092V300.63a8.487,8.487,0,0,1-.515,3.783,3.509,3.509,0,0,1-3.167,1.441H384.4v.952h14.955v-.952h-1.338a3.7,3.7,0,0,1-2.96-1.133q-.72-.8-.72-4.091V290.46q1.672.363,3.139.541a22.537,22.537,0,0,0,2.73.181q5.146,0,7.967-2.678a9.154,9.154,0,0,0,2.819-6.951A8.369,8.369,0,0,0,409.137,276.121Zm-5.959,11.315a6.128,6.128,0,0,1-4.621,2.072,14.987,14.987,0,0,1-1.8-.129q-1.058-.127-2.42-.386V274.475a15.162,15.162,0,0,1,3.372-.489,7.7,7.7,0,0,1,3.861.964,6.4,6.4,0,0,1,2.626,2.909,9.679,9.679,0,0,1,.927,4.209A7.532,7.532,0,0,1,403.179,287.436Z"
                        transform="translate(-312.19 -271.103)"
                        fill="#fff"
                    />
                    <path
                        id="Path_37793"
                        data-name="Path 37793"
                        d="M520.276,302.1a13.233,13.233,0,0,1-2.664-4.543L505.46,268.52h-.9L492.28,297.248a15.748,15.748,0,0,1-2.909,5.02,5.936,5.936,0,0,1-2.831,1v.952h10.993v-.952a6.611,6.611,0,0,1-3.282-.785,1.757,1.757,0,0,1-.76-1.4,8.72,8.72,0,0,1,.875-3.036l1.225-2.85.068-.158.351-.821,1.533-3.586h-.009l1.322-3.069.2-.48.795-1.841,3.753-8.719,3.485,8.3.021.049,2.415,5.756h-.042l1.86,4.51.021.054.992,2.361a10.662,10.662,0,0,1,1.03,3.577,1.789,1.789,0,0,1-.734,1.441,5.147,5.147,0,0,1-2.817.7v.952H523.61v-.952A5.46,5.46,0,0,1,520.276,302.1Zm-21.217-15.019-.2.48-1.312,3.069-1.533,3.586-.351.821"
                        transform="translate(-390.312 -268.518)"
                        fill="#fff"
                    />
                    <path
                        id="Path_37794"
                        data-name="Path 37794"
                        d="M680.631,304.413a17.948,17.948,0,0,1-4.247-4.583l-7.207-10.012a11.852,11.852,0,0,0,6.5-3.348,8.143,8.143,0,0,0,2.1-5.585,7.769,7.769,0,0,0-1.841-5.187,9.382,9.382,0,0,0-4.479-2.986,30.214,30.214,0,0,0-8.2-.811H650.54v.952h1.312a3.784,3.784,0,0,1,2.986,1.133q.72.8.72,4.092V300.63q0,2.984-.541,3.783a3.508,3.508,0,0,1-3.165,1.441H650.54v.952H665.5v-.952h-1.364a3.666,3.666,0,0,1-2.934-1.133q-.724-.8-.722-4.091V290.486c.275.019.541.031.8.04s.5.012.72.012q.825,0,2.137-.052l11.816,16.321h9.319v-.952A10.7,10.7,0,0,1,680.631,304.413Zm-18.715-15.522c-.153,0-.35,0-.59-.012s-.524-.014-.851-.014v-14.52a22.667,22.667,0,0,1,4.042-.489,7.333,7.333,0,0,1,5.42,2.046,7.2,7.2,0,0,1,2.046,5.317,6.927,6.927,0,0,1-2.535,5.509Q666.912,288.89,661.916,288.891Z"
                        transform="translate(-515.748 -271.103)"
                        fill="#fff"
                    />
                    <path
                        id="Path_37795"
                        data-name="Path 37795"
                        d="M982.274,302.1a13.267,13.267,0,0,1-2.664-4.543L967.46,268.52h-.9L954.28,297.248a15.8,15.8,0,0,1-2.909,5.02,5.945,5.945,0,0,1-2.831,1v.952h10.991v-.952a6.627,6.627,0,0,1-3.283-.785,1.763,1.763,0,0,1-.76-1.4,8.734,8.734,0,0,1,.877-3.036l1.634-3.8,1.545-3.609h-.014l2.41-5.6,3.666-8.512,1.853,4.416,4.068,9.693h-.056l1.493,3.609,1.394,3.316a10.659,10.659,0,0,1,1.03,3.577,1.789,1.789,0,0,1-.734,1.441,5.157,5.157,0,0,1-2.819.7v.952h13.772v-.952A5.466,5.466,0,0,1,982.274,302.1Z"
                        transform="translate(-743.676 -268.518)"
                        fill="#fff"
                    />
                </g>
            </g>
            <g
                id="Group_24"
                data-name="Group 24"
                transform="translate(123.292 159.253)"
            >
                <path
                    id="Path_37796"
                    data-name="Path 37796"
                    d="M272.86,448.664l.55-.056a1.612,1.612,0,0,0,.181.635,1.018,1.018,0,0,0,.444.4,1.487,1.487,0,0,0,.677.153,1.413,1.413,0,0,0,.59-.115.855.855,0,0,0,.381-.317.83.83,0,0,0,.125-.44.744.744,0,0,0-.12-.423.9.9,0,0,0-.4-.3,7.042,7.042,0,0,0-.785-.252,3.643,3.643,0,0,1-.851-.322,1.274,1.274,0,0,1-.47-.48,1.323,1.323,0,0,1-.155-.642,1.46,1.46,0,0,1,.19-.729,1.235,1.235,0,0,1,.552-.515,1.831,1.831,0,0,1,.809-.176,1.934,1.934,0,0,1,.863.183,1.3,1.3,0,0,1,.576.543,1.75,1.75,0,0,1,.216.811l-.56.049a1.133,1.133,0,0,0-.306-.738,1.069,1.069,0,0,0-.769-.249,1.108,1.108,0,0,0-.771.226.718.718,0,0,0-.242.545.629.629,0,0,0,.172.456,2.117,2.117,0,0,0,.879.367,5.1,5.1,0,0,1,.976.329,1.406,1.406,0,0,1,.569.524,1.438,1.438,0,0,1,.183.731,1.578,1.578,0,0,1-.2.774,1.4,1.4,0,0,1-.578.564,1.775,1.775,0,0,1-.849.2,2.2,2.2,0,0,1-1-.2,1.479,1.479,0,0,1-.635-.614A1.944,1.944,0,0,1,272.86,448.664Z"
                    transform="translate(-272.86 -445.08)"
                    fill="#fff"
                />
                <path
                    id="Path_37797"
                    data-name="Path 37797"
                    d="M316.19,453.079a2.107,2.107,0,0,1,.494-1.535,1.367,1.367,0,0,1,1-.414,1.335,1.335,0,0,1,1.077.5,2.111,2.111,0,0,1,.419,1.392,2.808,2.808,0,0,1-.186,1.133,1.463,1.463,0,0,1-.538.642,1.384,1.384,0,0,1-.771.228,1.332,1.332,0,0,1-1.084-.5A2.222,2.222,0,0,1,316.19,453.079Zm.557,0a1.775,1.775,0,0,0,.268,1.072.809.809,0,0,0,1.343,0,1.819,1.819,0,0,0,.268-1.091,1.729,1.729,0,0,0-.268-1.049.808.808,0,0,0-1.34,0A1.766,1.766,0,0,0,316.747,453.079Z"
                    transform="translate(-306.001 -449.707)"
                    fill="#fff"
                />
                <path
                    id="Path_37798"
                    data-name="Path 37798"
                    d="M356.777,450.317v-3.238H356.3v-.491h.477v-.4a2.022,2.022,0,0,1,.056-.557.8.8,0,0,1,.275-.4.888.888,0,0,1,.553-.153,2.286,2.286,0,0,1,.506.064l-.082.55a1.567,1.567,0,0,0-.317-.035.428.428,0,0,0-.348.122.752.752,0,0,0-.1.461v.343h.623v.491h-.623v3.238h-.541Z"
                    transform="translate(-336.68 -445.08)"
                    fill="#fff"
                />
                <path
                    id="Path_37799"
                    data-name="Path 37799"
                    d="M391.449,450.425l.078.557a1.732,1.732,0,0,1-.409.056.809.809,0,0,1-.456-.108.582.582,0,0,1-.228-.287,2.6,2.6,0,0,1-.066-.745v-2.144h-.4v-.491h.4v-.924l.539-.379v1.3h.543v.491h-.543v2.18a1.3,1.3,0,0,0,.028.348.244.244,0,0,0,.094.122.325.325,0,0,0,.186.045A1.5,1.5,0,0,0,391.449,450.425Z"
                    transform="translate(-362.432 -445.753)"
                    fill="#fff"
                />
                <path
                    id="Path_37800"
                    data-name="Path 37800"
                    d="M424.016,455.212l-.976-3.729h.56l.508,2.151.19.8c.007-.04.063-.3.165-.769l.508-2.184h.555l.477,2.163.16.712.183-.719.548-2.156h.527l-1,3.729h-.562l-.508-2.234-.122-.635-.647,2.869h-.569Z"
                    transform="translate(-387.726 -449.975)"
                    fill="#fff"
                />
                <path
                    id="Path_37801"
                    data-name="Path 37801"
                    d="M471.247,454.478a1.97,1.97,0,0,1-.578.421,1.45,1.45,0,0,1-.6.122,1.059,1.059,0,0,1-.809-.3,1.075,1.075,0,0,1-.282-.767,1.166,1.166,0,0,1,.106-.5,1,1,0,0,1,.28-.364,1.219,1.219,0,0,1,.391-.207,3.363,3.363,0,0,1,.48-.094,4.263,4.263,0,0,0,.964-.219c0-.087,0-.141,0-.165a.768.768,0,0,0-.153-.543.817.817,0,0,0-.616-.214.86.86,0,0,0-.564.155.98.98,0,0,0-.268.553l-.529-.085a1.671,1.671,0,0,1,.238-.642,1.073,1.073,0,0,1,.477-.376,1.865,1.865,0,0,1,.724-.132,1.651,1.651,0,0,1,.663.113.891.891,0,0,1,.376.282,1.088,1.088,0,0,1,.169.43,4,4,0,0,1,.028.583v.842a10.229,10.229,0,0,0,.035,1.115,1.566,1.566,0,0,0,.136.447h-.564A1.465,1.465,0,0,1,471.247,454.478Zm-.045-1.413a3.506,3.506,0,0,1-.884.24,1.792,1.792,0,0,0-.473.127.512.512,0,0,0-.214.2.59.59,0,0,0-.075.3.575.575,0,0,0,.165.421.634.634,0,0,0,.48.169.99.99,0,0,0,.555-.16.924.924,0,0,0,.357-.437,1.748,1.748,0,0,0,.087-.633v-.233Z"
                    transform="translate(-422.864 -449.7)"
                    fill="#fff"
                />
                <path
                    id="Path_37802"
                    data-name="Path 37802"
                    d="M510.47,454.936v-3.729h.487v.564a1.587,1.587,0,0,1,.343-.524.538.538,0,0,1,.348-.127.948.948,0,0,1,.555.2l-.186.586a.687.687,0,0,0-.4-.136.472.472,0,0,0-.318.125.682.682,0,0,0-.2.346,2.813,2.813,0,0,0-.089.738v1.952h-.541Z"
                    transform="translate(-454.598 -449.7)"
                    fill="#fff"
                />
                <path
                    id="Path_37803"
                    data-name="Path 37803"
                    d="M546.993,453.752l.56.08a1.658,1.658,0,0,1-.489.889,1.322,1.322,0,0,1-.914.315,1.352,1.352,0,0,1-1.11-.5,2.185,2.185,0,0,1-.409-1.413,2.29,2.29,0,0,1,.414-1.46,1.316,1.316,0,0,1,1.077-.52,1.276,1.276,0,0,1,1.046.51,2.246,2.246,0,0,1,.407,1.432c0,.038,0,.094,0,.169h-2.385a1.565,1.565,0,0,0,.3.941.826.826,0,0,0,.668.327.75.75,0,0,0,.508-.184A1.258,1.258,0,0,0,546.993,453.752Zm-1.775-1.023H547a1.4,1.4,0,0,0-.2-.706.783.783,0,0,0-.67-.364.8.8,0,0,0-.628.292A1.245,1.245,0,0,0,545.218,452.73Z"
                    transform="translate(-480.725 -449.715)"
                    fill="#fff"
                />
                <path
                    id="Path_37804"
                    data-name="Path 37804"
                    d="M619.95,450.607V445.46h.583v2.114h2.29V445.46h.583v5.147h-.583v-2.427h-2.29v2.427Z"
                    transform="translate(-538.334 -445.371)"
                    fill="#fff"
                />
                <path
                    id="Path_37805"
                    data-name="Path 37805"
                    d="M663.8,453.079a2.106,2.106,0,0,1,.494-1.535,1.366,1.366,0,0,1,1-.414,1.334,1.334,0,0,1,1.077.5,2.111,2.111,0,0,1,.419,1.392,2.8,2.8,0,0,1-.186,1.133,1.462,1.462,0,0,1-.538.642,1.383,1.383,0,0,1-.771.228,1.332,1.332,0,0,1-1.084-.5A2.208,2.208,0,0,1,663.8,453.079Zm.555,0a1.775,1.775,0,0,0,.268,1.072.809.809,0,0,0,1.343,0,1.817,1.817,0,0,0,.268-1.091,1.727,1.727,0,0,0-.268-1.049.808.808,0,0,0-1.34,0A1.766,1.766,0,0,0,664.355,453.079Z"
                    transform="translate(-571.873 -449.707)"
                    fill="#fff"
                />
                <path
                    id="Path_37806"
                    data-name="Path 37806"
                    d="M707.445,455.22v-.548a1.136,1.136,0,0,1-1.54.506.922.922,0,0,1-.364-.317,1.311,1.311,0,0,1-.167-.468,3.847,3.847,0,0,1-.033-.59V451.49h.541v2.069a4.456,4.456,0,0,0,.033.668.675.675,0,0,0,.216.393.609.609,0,0,0,.409.141.8.8,0,0,0,.456-.146.787.787,0,0,0,.3-.4,2.291,2.291,0,0,0,.089-.729v-2h.541v3.73Z"
                    transform="translate(-603.645 -449.983)"
                    fill="#fff"
                />
                <path
                    id="Path_37807"
                    data-name="Path 37807"
                    d="M745.2,453.847l.536-.1a.924.924,0,0,0,.252.576.788.788,0,0,0,.576.2.761.761,0,0,0,.553-.176.565.565,0,0,0,.181-.416.4.4,0,0,0-.16-.336,2.154,2.154,0,0,0-.552-.214,4.642,4.642,0,0,1-.825-.3.845.845,0,0,1-.348-.355,1.049,1.049,0,0,1-.117-.5,1.077,1.077,0,0,1,.1-.461,1,1,0,0,1,.266-.353,1.048,1.048,0,0,1,.343-.183,1.448,1.448,0,0,1,.468-.075,1.61,1.61,0,0,1,.661.127.9.9,0,0,1,.419.343,1.483,1.483,0,0,1,.186.579l-.529.085a.707.707,0,0,0-.209-.449.686.686,0,0,0-.489-.162.781.781,0,0,0-.531.143.445.445,0,0,0-.16.336.382.382,0,0,0,.066.221.487.487,0,0,0,.207.169c.054.024.214.078.477.162a5.884,5.884,0,0,1,.8.294.834.834,0,0,1,.355.332,1.035,1.035,0,0,1,.129.541,1.182,1.182,0,0,1-.157.595,1.082,1.082,0,0,1-.456.433,1.458,1.458,0,0,1-.672.153,1.353,1.353,0,0,1-.948-.3A1.526,1.526,0,0,1,745.2,453.847Z"
                    transform="translate(-634.132 -449.723)"
                    fill="#fff"
                />
                <path
                    id="Path_37808"
                    data-name="Path 37808"
                    d="M786.993,453.752l.56.08a1.658,1.658,0,0,1-.489.889,1.324,1.324,0,0,1-.915.315,1.352,1.352,0,0,1-1.11-.5,2.185,2.185,0,0,1-.409-1.413,2.291,2.291,0,0,1,.414-1.46,1.317,1.317,0,0,1,1.077-.52,1.276,1.276,0,0,1,1.046.51,2.246,2.246,0,0,1,.407,1.432c0,.038,0,.094,0,.169h-2.384a1.566,1.566,0,0,0,.3.941.826.826,0,0,0,.668.327.75.75,0,0,0,.508-.184A1.255,1.255,0,0,0,786.993,453.752Zm-1.775-1.023H787a1.4,1.4,0,0,0-.2-.706.783.783,0,0,0-.67-.364.8.8,0,0,0-.628.292A1.233,1.233,0,0,0,785.218,452.73Z"
                    transform="translate(-664.29 -449.715)"
                    fill="#fff"
                />
            </g>
        </g>
    </svg>
);
const DashSidebar = () => {
    const listItemRef = useRef<any>();
    const [isActive, setIsActive] = useState(false);

    const nestedList = [
        {
            listName: "projects",
            listButtons: [
                { name: "create project", to: "/dashboard/createproject" },
                { name: "my projects", to: "/dashboard/myprojects" },
            ],
        },
        {
            listName: "Income",
            listButtons: [
                { name: "Income Form", to: "/dashboard/incomeForm" },
                { name: "Income Table", to: "/dashboard/incomeTable" },
            ],
        },
        {
            listName: "outcome",
            listButtons: [
                { name: "outcome Form", to: "/dashboard/outcomeForm" },
                { name: "outcome Table", to: "/dashboard/outcomeTable" },
            ],
        },
        {
            listName: "Attendence",
            listButtons: [
                { name: "Daily Attendence", to: "/dashboard/daily" },
                { name: "Attendence History", to: "/dashboard/history" },
            ],
        },
        {
            listName: "holiday",
            listButtons: [
                { name: "Daily Attendence", to: "/dashboard/holiday" },
                { name: "view Holidays", to: "/dashboard/viewholidays" },
            ],
        },
        {
            listName: "employe",
            listButtons: [
                { name: "All Employees", to: "/dashboard/employs/allEmploye" },
                { name: "add Employee", to: "/dashboard/employs" },
            ],
        },
    ];
    return (
        <Box
            sx={{
                bgcolor: "#312F30",
                display: { xs: "none", sm: "block" },
                // boxShadow: "6px 2px 12px 0px rgba(224,208,224,1)",
                // position: "fixed",
                // overflowY: "scroll",
                // top: "0",
                // bottom: "0",
                // width:"15%",
                border: "none",
                borderRadius: "0 40px 40px 0px",
                "& .css-75oo7v-MuiButtonBase-root-MuiListItemButton-root": {
                    bgcolor: "#312F30",
                },
            }}
        >
            <Box
                sx={{
                    position: "fixed",
                    width: "15%",
                    top: "0",
                    bottom: "0",
                    overflowY: "scroll",
                    bgcolor: "#312F30",
                    boxShadow: "inset -2px 1px 8px 0px rgb(224 208 224)",
                    borderRadius: "0 40px 40px 0px",
                    // borderRadius: "10px",
                    "&::-webkit-scrollbar": { width: 0 },
                }}
            >
                <Box sx={{ height: "100%", padding: "10px", paddingInline: 0 }}>
                    <Box sx={{ height: "100%" }}>
                        <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                            <Box
                                sx={{
                                    height: "60px",
                                    marginBottom: "20px",
                                    margin: "5px 20px 30px",
                                }}
                            >
                                <Link href="/">{logo}</Link>
                            </Box>
                        </Box>
                        {/* <NestedList listName={"Dashboard"} listButtons={"Dashboard"} /> */}
                        {/* <Typography
            variant="p"
            sx={{ width: "100%", maxWidth: 360, color: "#fff" }}
          >
            Dashboard
          </Typography> */}

                        <ListItemButton
                            sx={{
                                paddingRight: 0,
                                backgroundColor: isActive ? "#fff" : "",
                                color: isActive ? "#ED1B24" : "",
                                borderLeft: isActive ? "2px solid #ED1B24" : ""
                            }}
                        >
                            <ListItemText />
                            {/* <NavLink
                ref={listItemRef}
                to={"/Dashboard/"}
                style={({ isActive }) => {
                  setIsActive(isActive);
                  return {
                    width: "100%",
                    textDecoration: "none",
                    color: isActive ? "#ED1B24" : "#fff",
                    padding: 2,
                    fontSize: "1.2rem",
                  };
                }}
                replace
              >
                Dashboard
              </NavLink> */}
                            <Link href="/dashboard/" passHref replace
                                ref={listItemRef}
                                style={{
                                    width: "100%",
                                    textDecoration: "none",
                                    color: isActive ? "#ED1B24" : "#fff",
                                    padding: 2,
                                    fontSize: "1.2rem",
                                }}
                                onClick={() => setIsActive(true)}
                            >

                                Dashboard
                            </Link>
                        </ListItemButton>

                        {nestedList.map((item, index) => (
                            <NestedList
                                key={index}
                                listName={item.listName}
                                listButtons={item.listButtons}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default DashSidebar;