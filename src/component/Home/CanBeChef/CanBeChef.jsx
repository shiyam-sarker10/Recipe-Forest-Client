import React from 'react';
import Button from '../../shared/Buttons/Button';
import Container from '../../shared/Container/Container';
import chef from '../../../assets/chef.png'

const CanBeChef = () => {
    return (
      <Container>
        <div className="flex justify-between items-center ">
          <div className="space-y-6 w-[50%]">
            <h2 className="text-4xl font-semibold max-w-[480px]">
              Everyone can be a chef in their own kitchen
            </h2>
            <p className="text-gray-500  max-w-[480px]">
              Ditch the takeout, unleash your inner chef! Your kitchen awaits, a
              culinary canvas where anyone can create delicious masterpieces.
            </p>
            <div className="w-max">
              <Button text="Learn More"></Button>
            </div>
          </div>
          <div className="w-[50%] relative bg-gradient-to-t from-[#E7FAFE] to-transparent px-10 rounded-xl">
            <img className="w-[550px]" src={chef} alt="" />
            <div className="absolute top-20 left-20 rotate-45">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="90"
                x="0"
                y="0"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M386.515 91.927c-16.488-55.363-60.828-49.528-75.373-45.964-3.023.741-6.212.521-9.064-.725-33.007-14.413-53.693 6.714-61.329 16.948-2.144 2.873-5.55 4.568-9.133 4.422-26.253-1.068-31.062 22.746-31.062 22.746v76.792h185.961V91.927z"
                    fill="#30aa44"
                    data-original="#30aa44"
                  ></path>
                  <path
                    d="M222.33 96.239s4.81-23.814 31.062-22.746c3.582.146 6.989-1.549 9.133-4.422 7.636-10.235 28.322-31.361 61.329-16.948 2.852 1.246 6.041 1.465 9.064.725 5.236-1.283 14.332-2.86 24.601-1.771-17.853-10.254-37.573-7.27-46.377-5.112-3.023.741-6.212.521-9.064-.725-33.007-14.413-53.693 6.714-61.329 16.948-2.144 2.873-5.551 4.568-9.133 4.422-26.252-1.068-31.062 22.746-31.062 22.746v76.792h21.776V96.239z"
                    fill="#269e35"
                    data-original="#269e35"
                  ></path>
                  <path
                    d="M237.416 124.588c-44.106-65.304-97.288-40.182-113.209-30.447-3.076 1.881-6.674 2.781-10.255 2.366-55.826-6.476-70.004 38.828-70.004 38.828v83.187h193.468v-93.934z"
                    fill="#3bbc56"
                    data-original="#3bbc56"
                  ></path>
                  <path
                    d="M67.017 143.501s14.178-45.304 70.004-38.828c3.581.415 7.18-.485 10.255-2.366 9.07-5.546 30.237-16.079 54.926-12.047-33.891-19.009-66.189-3.339-77.996 3.88-3.076 1.881-6.674 2.781-10.255 2.366-55.826-6.476-70.004 38.828-70.004 38.828v83.187h23.07v-75.02z"
                    fill="#30aa44"
                    data-original="#30aa44"
                  ></path>
                  <path
                    d="M445.339 137.098c-53.684-75.279-115.653-42.056-133.708-29.836a13.966 13.966 0 0 1-11.421 1.906c-48.484-12.967-71.947 23.514-79.553 39.087a14.548 14.548 0 0 1-9.979 7.808c-39.611 8.635-33.415 49.19-33.415 49.19v91.737h138.854l129.222-159.892z"
                    fill="#83cc8e"
                    data-original="#83cc8e"
                  ></path>
                  <path
                    d="M320.239 111.418a13.963 13.963 0 0 0 11.421-1.906c9.041-6.119 29.096-17.504 53.607-17.894-33.297-8.167-62.23 7.924-73.636 15.644-1.2.812-2.51 1.413-3.874 1.812 3.963.416 8.12 1.177 12.482 2.344zM197.292 296.989v-89.487s-6.196-40.555 33.415-49.19c4.34-.946 8.03-3.816 9.979-7.808 6.364-13.03 23.833-40.69 57.767-41.783-47.293-11.63-70.283 24.149-77.797 39.532a14.548 14.548 0 0 1-9.979 7.808c-39.611 8.635-33.415 49.19-33.415 49.19v91.737h20.03v.001z"
                    fill="#68ba72"
                    data-original="#78c181"
                    opacity="1"
                  ></path>
                  <path
                    d="M352.63 150.871a7.727 7.727 0 0 0-10.139-4.075c-.55.235-9.257 4.015-21.236 12.656-3.331-10.411-8.591-16.766-8.894-17.126-2.737-3.249-7.565-3.661-10.833-.946-3.267 2.715-3.714 7.578-1.02 10.862.063.077 5.677 7.062 7.453 17.879-11.281 10.029-21.429 21.694-30.233 35.241-4.676-24.358-15.39-36.589-15.98-37.246-2.853-3.174-7.758-3.455-10.931-.603-3.174 2.852-3.453 7.716-.601 10.891.147.168 14.471 17.027 14.202 51.367-7.425 16.48-13.359 36.052-16.09 59.042a7.727 7.727 0 0 0 6.762 8.584c4.202.506 8.077-2.496 8.584-6.761 4.112-34.624 15.212-55.064 15.82-56.968 7.744-16.539 18.039-31.406 30.847-44.482 19.476-19.883 37.837-28.012 38.226-28.181a7.726 7.726 0 0 0 4.063-10.134z"
                    fill="#d4efd8"
                    data-original="#9be0a3"
                    opacity="1"
                  ></path>
                  <path
                    d="M101.293 261.959s-49.217 14.09-69.671-30.929c-1.056-2.324-2.652-4.36-4.699-5.886-9.082-6.77-34.158-28.725-24.907-59.001 10.861-35.544 72.858-51.017 120.758 10.952 2.941 3.805 7.195 6.414 11.931 7.25 15.286 2.697 50.802 13.752 67.339 58.833 2.378 6.483 7.569 11.52 14.137 13.652 11.143 3.617 30.618 13.378 41.879 33.927-4.89 8.922-9.656 19.028-11.204 32.963-4.47 40.234 3.527 54.859 3.045 67.125v27.713s-47.485 7.212-72.991-42.24-75.617-114.359-75.617-114.359z"
                    fill="#30aa44"
                    data-original="#30aa44"
                  ></path>
                  <path
                    d="M52.227 231.029c-1.056-2.324-2.652-4.359-4.699-5.886-9.082-6.77-34.158-28.725-24.907-59.001 4.73-15.481 19.163-27.151 37.905-30.277-28.297-4.433-52.156 9.482-58.509 30.277-9.251 30.276 15.825 52.231 24.907 59.001 2.047 1.526 3.643 3.561 4.699 5.886 15.717 34.594 48.415 34.285 62.718 32.287-14.775-2.185-31.976-9.974-42.114-32.287z"
                    fill="#269e35"
                    data-original="#269e35"
                  ></path>
                  <path
                    d="M176.421 348.197c-24.154-45.466-51.058-100.295-116.302-142.569-2.228-1.443-4.629 1.607-2.698 3.428 24.723 23.322 65.274 71.72 93.279 156.735C183.941 466.7 234.857 473.413 256 471.357v-58.706c-16.518-1.242-51.055-10.763-79.579-64.454z"
                    fill="#83cc8e"
                    data-original="#83cc8e"
                  ></path>
                  <path
                    d="M175.72 365.791c-10.141-30.784-21.928-56.743-34.011-78.473-18.969-28.603-43.863-57.245-81.59-81.69-2.228-1.443-4.629 1.607-2.698 3.428 24.723 23.322 65.274 71.72 93.279 156.735C183.941 466.7 234.857 473.413 256 471.357v-2.592c-24.408-7.35-56.765-31.591-80.28-102.974z"
                    fill="#68ba72"
                    data-original="#78c181"
                    opacity="1"
                  ></path>
                  <path
                    d="M410.707 261.959s49.218 14.09 69.671-30.929c1.056-2.324 2.652-4.36 4.699-5.886 9.082-6.771 34.158-28.725 24.907-59.001-10.861-35.545-72.858-51.017-120.758 10.952-2.941 3.805-7.195 6.414-11.931 7.25-15.286 2.697-50.803 13.752-67.339 58.833-2.378 6.483-7.569 11.52-14.137 13.652-15.981 5.188-44.878 20.861-49.992 66.89-7.139 64.255 20.15 63.196-11.853 91.518 0 0 .796 17.573 38.185 10.018 37.389-7.557 138.548-163.297 138.548-163.297z"
                    fill="#30aa44"
                    data-original="#30aa44"
                  ></path>
                  <path
                    d="M256 415.237c32.003-28.322 4.714-27.263 11.853-91.518 5.114-46.029 34.011-61.702 49.992-66.89 6.568-2.132 11.759-7.169 14.137-13.652 16.537-45.081 52.053-56.137 67.339-58.833 4.736-.836 8.99-3.445 11.931-7.25 19.627-25.392 41.619-37.775 61.492-41.109-24.377-4.354-56.233 5.809-83.519 41.109-2.941 3.805-7.195 6.414-11.931 7.25-15.286 2.697-50.802 13.752-67.339 58.833-2.378 6.483-7.569 11.52-14.137 13.652-15.982 5.188-44.878 20.861-49.992 66.89-7.139 64.255 20.15 63.196-11.853 91.518 0 0 .754 16.161 33.834 10.802C256.374 423.095 256 415.237 256 415.237z"
                    fill="#269e35"
                    data-original="#269e35"
                  ></path>
                  <path
                    d="M335.579 348.197c-32.23 60.669-72.159 64.949-85.067 64.604-1.387-.207-2.795-.349-4.239-.349-15.737 0-28.494 12.757-28.494 28.494 0 14.441 10.742 26.372 24.671 28.24 2.662.357 5.315.797 7.946 1.337 15.903 3.265 74.187 6.73 110.903-104.731 28.005-85.015 68.556-133.412 93.279-156.735 1.931-1.821-.471-4.871-2.698-3.428-65.243 42.273-92.147 97.102-116.301 142.568z"
                    fill="#83cc8e"
                    data-original="#83cc8e"
                  ></path>
                  <path
                    d="M238.766 454.215c0-15.737 12.757-28.494 28.494-28.494 1.445 0 2.852.142 4.239.349 12.909.345 52.837-3.935 85.067-64.604 6.757-12.719 13.731-26.172 21.698-39.877 25.75-58.147 56.247-93.602 76.315-112.534 1.93-1.821-.471-4.871-2.698-3.428-65.244 42.274-92.148 97.103-116.302 142.569-32.23 60.669-72.159 64.949-85.067 64.604-1.387-.207-2.794-.349-4.239-.349-15.737 0-28.494 12.757-28.494 28.494 0 14.441 10.742 26.372 24.671 28.24.209.028.417.065.625.094a28.357 28.357 0 0 1-4.309-15.064z"
                    fill="#68ba72"
                    data-original="#78c181"
                    opacity="1"
                  ></path>
                  <path
                    d="M337.326 361.745a7.73 7.73 0 0 1-7.595-6.356c-4.058-22.477-18.826-36.745-18.974-36.886a7.726 7.726 0 0 1-.271-10.924 7.729 7.729 0 0 1 10.924-.272c.757.72 18.584 17.945 23.53 45.336a7.727 7.727 0 0 1-7.614 9.102z"
                    fill="#68ba72"
                    data-original="#78c181"
                    opacity="1"
                  ></path>
                  <path
                    d="M184.272 373.726a7.725 7.725 0 0 1-7.716-8.265c1.941-27.767 17.791-46.827 18.465-47.625a7.728 7.728 0 0 1 11.821 9.954c-.155.186-13.294 16.198-14.87 38.747a7.727 7.727 0 0 1-7.7 7.189z"
                    fill="#83cc8e"
                    data-original="#83cc8e"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="absolute top-[200px] right-0 -rotate-45">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="70"
                x="0"
                y="0"
                viewBox="0 0 510 510"
                xmlSpace="preserve"
              >
                <g>
                  <linearGradient id="a">
                    <stop offset="0" stopColor="#ffdfcf"></stop>
                    <stop offset="1" stopColor="#ffa78f"></stop>
                  </linearGradient>
                  <linearGradient
                    xlinkHref="#a"
                    id="d"
                    x1="169.95"
                    x2="299.283"
                    y1="147.129"
                    y2="375.129"
                    gradientUnits="userSpaceOnUse"
                  ></linearGradient>
                  <linearGradient
                    id="e"
                    x1="-22.465"
                    x2="474.868"
                    y1="77.829"
                    y2="493.162"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#f89580" stopOpacity="0"></stop>
                    <stop
                      offset=".261"
                      stopColor="#f2917c"
                      stopOpacity=".262"
                    ></stop>
                    <stop
                      offset=".587"
                      stopColor="#e38670"
                      stopOpacity=".589"
                    ></stop>
                    <stop
                      offset=".948"
                      stopColor="#ca735d"
                      stopOpacity=".95"
                    ></stop>
                    <stop offset=".997" stopColor="#c5715a"></stop>
                  </linearGradient>
                  <linearGradient
                    id="f"
                    x1="216.626"
                    x2="216.626"
                    y1="408.223"
                    y2="493.817"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#f89580" stopOpacity="0"></stop>
                    <stop
                      offset=".358"
                      stopColor="#e98a75"
                      stopOpacity=".359"
                    ></stop>
                    <stop offset=".997" stopColor="#c5715a"></stop>
                  </linearGradient>
                  <linearGradient
                    xlinkHref="#a"
                    id="g"
                    x1="64.078"
                    x2="390.199"
                    y1="49.922"
                    y2="376.042"
                    gradientUnits="userSpaceOnUse"
                  ></linearGradient>
                  <linearGradient id="b">
                    <stop offset="0" stopColor="#fd4755"></stop>
                    <stop offset="1" stopColor="#d2024e"></stop>
                  </linearGradient>
                  <linearGradient
                    xlinkHref="#b"
                    id="h"
                    x1="287.535"
                    x2="441.457"
                    y1="195.398"
                    y2="349.32"
                    gradientUnits="userSpaceOnUse"
                  ></linearGradient>
                  <linearGradient
                    xlinkHref="#b"
                    id="i"
                    x1="57.735"
                    x2="273.155"
                    y1="193.373"
                    y2="408.793"
                    gradientUnits="userSpaceOnUse"
                  ></linearGradient>
                  <linearGradient
                    xlinkHref="#b"
                    id="j"
                    x1="183.545"
                    x2="372.711"
                    y1="10.658"
                    y2="199.825"
                    gradientUnits="userSpaceOnUse"
                  ></linearGradient>
                  <linearGradient
                    xlinkHref="#b"
                    id="k"
                    x1="412.499"
                    x2="529.562"
                    y1="103.483"
                    y2="220.547"
                    gradientUnits="userSpaceOnUse"
                  ></linearGradient>
                  <linearGradient id="c">
                    <stop offset="0" stopColor="#c00148" stopOpacity="0"></stop>
                    <stop
                      offset=".311"
                      stopColor="#aa0e3f"
                      stopOpacity=".311"
                    ></stop>
                    <stop
                      offset=".958"
                      stopColor="#713028"
                      stopOpacity=".958"
                    ></stop>
                    <stop offset="1" stopColor="#6d3326"></stop>
                  </linearGradient>
                  <linearGradient
                    xlinkHref="#c"
                    id="l"
                    x1="146.585"
                    x2="146.585"
                    y1="284.667"
                    y2="411.765"
                    gradientUnits="userSpaceOnUse"
                  ></linearGradient>
                  <linearGradient
                    id="m"
                    x1="96.859"
                    x2="172.227"
                    y1="274.84"
                    y2="350.208"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#eaf6ff"></stop>
                    <stop offset="1" stopColor="#b3dafe"></stop>
                  </linearGradient>
                  <linearGradient
                    id="n"
                    x1="128.671"
                    x2="128.671"
                    y1="314.167"
                    y2="355.194"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#d8ecfe" stopOpacity="0"></stop>
                    <stop
                      offset=".787"
                      stopColor="#9bd1fe"
                      stopOpacity=".787"
                    ></stop>
                    <stop offset="1" stopColor="#8ac9fe"></stop>
                  </linearGradient>
                  <linearGradient
                    xlinkHref="#c"
                    id="o"
                    x1="369.475"
                    x2="369.475"
                    y1="269.667"
                    y2="343.182"
                    gradientUnits="userSpaceOnUse"
                  ></linearGradient>
                  <path
                    fill="url(#d)"
                    d="M510 183.14v58.66c0 23.11-4.59 45.75-13.26 66.69a174.295 174.295 0 0 1-37.78 56.52 198.458 198.458 0 0 1-140.35 58.14h-7.97A143.764 143.764 0 0 0 209 465.25c-23.9 23.9-55.24 35.86-86.57 35.86s-62.67-11.96-86.57-35.86A122.43 122.43 0 0 1 0 378.68v-65.35c0-16.24 3.22-19.69 9.32-21.95 6.1-2.27 15.06-3.34 26.54-14.82a138.735 138.735 0 0 0 30.02-44.93c6.32-15.27 9.92-31.7 10.46-48.49z"
                    opacity="1"
                    data-original="url(#d)"
                  ></path>
                  <path
                    fill="url(#e)"
                    d="M510 183.14v58.66c0 23.11-4.59 45.75-13.26 66.69a174.295 174.295 0 0 1-37.78 56.52 198.458 198.458 0 0 1-140.35 58.14h-7.97A143.764 143.764 0 0 0 209 465.25c-23.9 23.9-55.24 35.86-86.57 35.86s-62.67-11.96-86.57-35.86A122.43 122.43 0 0 1 0 378.68v-65.35c0-16.24 3.22-19.69 9.32-21.95 6.1-2.27 15.06-3.34 26.54-14.82a138.735 138.735 0 0 0 30.02-44.93c6.32-15.27 9.92-31.7 10.46-48.49z"
                    opacity="1"
                    data-original="url(#e)"
                  ></path>
                  <path
                    fill="url(#f)"
                    d="M.283 386.89a122.426 122.426 0 0 0 35.577 78.36c23.9 23.9 55.24 35.86 86.57 35.86s62.67-11.96 86.57-35.86a143.753 143.753 0 0 1 101.64-42.1h7.97a198.471 198.471 0 0 0 114.359-36.26z"
                    opacity="1"
                    data-original="url(#f)"
                  ></path>
                  <path
                    fill="url(#g)"
                    d="M76.422 119.966a138.49 138.49 0 0 1-40.563 97.927A122.431 122.431 0 0 0 0 304.465v15.547a122.431 122.431 0 0 0 35.859 86.572c47.812 47.812 125.331 47.812 173.144 0a143.73 143.73 0 0 1 101.633-42.098h7.969a198.498 198.498 0 0 0 140.359-58.138A174.246 174.246 0 0 0 510 183.137C510 86.903 431.987 8.89 335.753 8.89H187.498c-61.346 0-111.076 49.73-111.076 111.076z"
                    opacity="1"
                    data-original="url(#g)"
                  ></path>
                  <path
                    fill="url(#h)"
                    d="M442.388 287.557c15.57-15.893 19.864-39.735 10.704-60.011a218.93 218.93 0 0 0-5.578-11.452c-15.26-29.13-36.229-53.272-60.962-70.372-.208.176-.41.357-.619.532-28.313 23.771-63.583 39.488-101.88 45.791 6.049 22.643 9.117 46.218 9.117 70.29 0 27.499-4.007 54.354-11.776 79.66a170.792 170.792 0 0 1 29.242-2.51h7.969c46.343 0 89.912-18.047 122.681-50.816.37-.368.737-.739 1.102-1.112z"
                    opacity="1"
                    data-original="url(#h)"
                  ></path>
                  <path
                    fill="url(#i)"
                    d="M121.463 417.439c26.386.255 51.232-9.902 69.862-28.532 13.76-13.76 29.481-24.844 46.53-33.002 9.93-4.752 17.288-13.572 20.394-24.133 6.45-21.926 9.921-45.344 9.921-69.435 0-23.207-3.121-45.881-9.285-67.545a239.65 239.65 0 0 1-13.219.375c-52.884 0-102.699-17.37-140.266-48.911a191.063 191.063 0 0 1-5.391-4.719c-4.637 35.397-20.651 68.12-46.263 93.824C35.519 253.654 25 278.234 25 304.058v15.954c0 26.347 10.387 51.098 29.225 69.575 17.929 17.587 42.125 27.61 67.238 27.852z"
                    opacity="1"
                    data-original="url(#i)"
                  ></path>
                  <path
                    fill="url(#j)"
                    d="M335.753 33.89H187.498c-39.017 0-72.038 26.099-82.557 61.753-2.18 7.39-.207 15.418 5.186 20.922 32.018 32.678 80.88 53.601 135.54 53.601 74.286 0 137.871-38.64 163.002-92.921 5.276-11.397.124-24.836-11.307-30.038-18.792-8.551-39.654-13.317-61.609-13.317z"
                    opacity="1"
                    data-original="url(#j)"
                  ></path>
                  <path
                    fill="url(#k)"
                    d="M437.1 73.685c-6.748 19.563-17.634 37.919-32.292 54.305 32.575 23.7 58.104 57.385 74.348 96.707 3.845-13.338 5.843-27.294 5.843-41.56.001-43.205-18.459-82.173-47.899-109.452z"
                    opacity="1"
                    data-original="url(#k)"
                  ></path>
                  <path
                    fill="url(#l)"
                    d="M268.17 262.337c0 24.09-3.47 47.51-9.92 69.44-3.11 10.56-10.47 19.38-20.4 24.13-17.04 8.16-32.76 19.24-46.52 33-18.64 18.63-43.48 28.79-69.87 28.53-25.11-.24-49.31-10.26-67.24-27.85-18.83-18.48-29.22-43.23-29.22-69.57v-15.96c0-17.3 4.72-34.05 13.34-48.72h229.72c.08 2.33.11 4.66.11 7z"
                    opacity="1"
                    data-original="url(#l)"
                  ></path>
                  <circle
                    cx="128.671"
                    cy="306.652"
                    r="52.662"
                    fill="url(#m)"
                    opacity="1"
                    data-original="url(#m)"
                  ></circle>
                  <path
                    fill="url(#n)"
                    d="M76.019 307.506c.213 13.191 5.348 26.318 15.414 36.384 20.566 20.566 53.91 20.566 74.475 0 10.066-10.066 15.202-23.192 15.414-36.384z"
                    opacity="1"
                    data-original="url(#n)"
                  ></path>
                  <path
                    fill="url(#o)"
                    d="M457.56 255.337a54.13 54.13 0 0 1-15.17 32.22c-.37.37-.73.74-1.1 1.11-32.77 32.77-76.34 50.82-122.68 50.82h-7.97c-9.91 0-19.68.85-29.25 2.51 7.77-25.31 11.78-52.16 11.78-79.66 0-2.34-.03-4.67-.1-7z"
                    opacity="1"
                    data-original="url(#o)"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="absolute top-[50px] right-[100px] -rotate-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="100"
                x="0"
                y="0"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    fill="#008e4d"
                    d="m432.287 137.453 13.38 22.376-181.07 108.262-13.379-22.377z"
                    opacity="1"
                    data-original="#008e4d"
                  ></path>
                  <path
                    fill="#008e4d"
                    d="m366.807 63.237 20.442 13.81-140.558 208.076-20.443-13.81z"
                    opacity="1"
                    data-original="#008e4d"
                  ></path>
                  <path
                    fill="#39b54a"
                    d="M151.827 406.499c43.72-67.973 50.033-74.286 58.774-83.027L419.96 114.113l-18.921-18.921-210.172 210.173c-8.382 8.358-16.364 15.606-82.213 57.96-67.973 43.721-33.774 76.948-33.774 76.948s33.226 34.199 76.947-33.774z"
                    opacity="1"
                    data-original="#39b54a"
                  ></path>
                  <path
                    fill="#f9efdd"
                    d="M74.879 440.273s-34.197-33.229 33.773-76.946c65.847-42.355 73.828-49.605 82.217-57.966l12.133-12.133 29.335 8.493-21.743 21.743c-8.74 8.739-15.052 15.051-58.769 83.036-43.717 67.971-76.946 33.773-76.946 33.773z"
                    opacity="1"
                    data-original="#f9efdd"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="absolute bottom-[100px] left-[10px] -rotate-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="60"
                x="0"
                y="0"
                viewBox="0 0 48 48"
                xmlSpace="preserve"
              >
                <g>
                  <g data-name="12-tomato">
                    <path
                      fill="#ff1f1f"
                      d="M45 26.553C45 36.77 35.6 47 24 47S3 36.77 3 26.553 12.4 11 24 11s21 5.335 21 15.553z"
                      opacity="1"
                      data-original="#ff1f1f"
                    ></path>
                    <path
                      fill="#00ac0d"
                      d="M26.34 9a9.561 9.561 0 0 0 .66 1 1.993 1.993 0 0 1-2 2h-1.12a1.967 1.967 0 0 1-1.78-1.09 9.329 9.329 0 0 1-.68-2c-.71-3.05-.63-7.29.92-7.91h3.5a8.532 8.532 0 0 0 .5 8z"
                      opacity="1"
                      data-original="#00ac0d"
                    ></path>
                    <path
                      fill="#007700"
                      d="M28 9c1.81-.05 4.95.53 6 2 1.93 2.7 5.72 1.12 5.99 1.01C37.99 15.73 30 14 30 14c1 4.67-1 7-1 7-3 0-6-6-6-6-2 .93-5 6-5 6-4-2.8-2-6-2-6a7.943 7.943 0 0 1-7-4c5 0 4 .07 7-1a12.133 12.133 0 0 1 5-1l.42-.09a9.329 9.329 0 0 0 .68 2A1.967 1.967 0 0 0 23.88 12H25a1.993 1.993 0 0 0 2-2 9.561 9.561 0 0 1-.66-1z"
                      opacity="1"
                      data-original="#007700"
                    ></path>
                    <path
                      fill="#ff1f1f"
                      d="M45 26.553C45 36.77 35.6 47 24 47S3 36.77 3 26.553 12.4 11 24 11s21 5.335 21 15.553z"
                      opacity="1"
                      data-original="#ff1f1f"
                    ></path>
                    <path
                      fill="#cb0303"
                      d="M7 21.553a13.965 13.965 0 0 1 1.274-5.936A13.436 13.436 0 0 0 3 26.553C3 36.77 12.4 47 24 47a21.541 21.541 0 0 0 18.251-10.815A20.9 20.9 0 0 1 28 42C16.4 42 7 31.77 7 21.553z"
                      opacity="1"
                      data-original="#cb0303"
                    ></path>
                    <path
                      fill="#008906"
                      d="M26.34 9a9.561 9.561 0 0 0 .66 1 1.993 1.993 0 0 1-2 2h-1.12a1.967 1.967 0 0 1-1.78-1.09 9.329 9.329 0 0 1-.68-2c-.71-3.05-.63-7.29.92-7.91h3.5a8.532 8.532 0 0 0 .5 8z"
                      opacity="1"
                      data-original="#008906"
                    ></path>
                    <path
                      fill="#007700"
                      d="M28 9c1.81-.05 4.95.53 6 2 1.93 2.7 5.72 1.12 5.99 1.01C37.99 15.73 30 14 30 14c1 4.67-1 7-1 7-3 0-6-6-6-6-2 .93-5 6-5 6-4-2.8-2-6-2-6a7.943 7.943 0 0 1-7-4c5 0 4 .07 7-1a12.133 12.133 0 0 1 5-1l.42-.09a9.329 9.329 0 0 0 .68 2A1.967 1.967 0 0 0 23.88 12H25a1.993 1.993 0 0 0 2-2 9.561 9.561 0 0 1-.66-1z"
                      opacity="1"
                      data-original="#007700"
                    ></path>
                    <path
                      fill="#aa1313"
                      d="M18 23s2.553-5.07 4.812-6c0 0 3.388 6 6.776 6A10.044 10.044 0 0 0 31 15s5.309 1.648 8.721.613a16.916 16.916 0 0 0-1.559-1.092 4.94 4.94 0 0 1-1.448-.388A18.519 18.519 0 0 1 30 14c1 4.67-1 7-1 7-3 0-6-6-6-6-2 .93-5 6-5 6-4-2.8-2-6-2-6a7.919 7.919 0 0 1-4.559-1.369 18.451 18.451 0 0 0-2.307 1.327A10.221 10.221 0 0 0 14 16s-.518 4.2 4 7z"
                      opacity="1"
                      data-original="#aa1313"
                    ></path>
                    <path
                      fill="#ff5d03"
                      d="M31 15a10.119 10.119 0 0 1 .264 3.04C37.111 20.455 41 24.991 41 31.553a18.307 18.307 0 0 1-1.326 6.694 22.558 22.558 0 0 0 2.577-2.062q-.333.567-.7 1.116l.042-.06.141-.215c.139-.214.273-.429.4-.647.049-.082.1-.164.146-.247.123-.21.241-.421.356-.635.049-.091.1-.182.146-.274q.16-.311.312-.627c.047-.1.1-.2.141-.3.094-.2.182-.41.269-.616.046-.108.092-.216.135-.325.08-.2.155-.4.229-.605.042-.115.085-.23.124-.346.069-.2.131-.4.193-.6.036-.12.075-.239.109-.36.057-.2.107-.4.157-.6.031-.124.065-.248.093-.373.046-.2.084-.4.123-.6.024-.125.052-.25.073-.376.036-.2.063-.411.091-.616.017-.122.037-.243.051-.364.026-.222.043-.444.06-.667.008-.105.02-.211.027-.316q.029-.492.029-.983a13.636 13.636 0 0 0-6.837-12.031 16.892 16.892 0 0 1 1.558 1.091C36.309 16.648 31 15 31 15z"
                      opacity="1"
                      data-original="#ff5d03"
                    ></path>
                    <path
                      fill="#cb0303"
                      d="M39.721 15.613a16.892 16.892 0 0 0-1.558-1.091c-.3-.183-.584-.371-.894-.54a7.51 7.51 0 0 1-.554.152 10.248 10.248 0 0 1-.986.164c-.117.014-.262.03-.393.041-.116.011-.231.022-.347.03a16.23 16.23 0 0 1-.62.026H33.652c-.113 0-.242 0-.362-.009a19.098 19.098 0 0 1-.556-.029l-.343-.026-.291-.031-.308-.031a21.587 21.587 0 0 1-.693-.087l-.238-.035-.194-.03-.259-.044-.144-.026-.146-.028-.056-.01L30 14a11.215 11.215 0 0 1 .217 3.63c.357.128.7.268 1.047.41A10.119 10.119 0 0 0 31 15s5.309 1.648 8.721.613z"
                      opacity="1"
                      data-original="#cb0303"
                    ></path>
                    <g fill="#00ac0d">
                      <path
                        d="M36.261 12.465zM38.94 12.35c.081-.021.16-.041.234-.062a7.076 7.076 0 0 1-.234.062zM36.719 12.538zM38.513 12.445c.116-.023.228-.047.335-.072-.107.027-.219.049-.335.072zM37.619 12.559a6.722 6.722 0 0 0 .861-.108 6.929 6.929 0 0 1-.861.108zM35.355 12.154c.1.046.19.09.287.127a3.804 3.804 0 0 1-.287-.127zM26.967 10.329A1.782 1.782 0 0 0 27 10a1.983 1.983 0 0 1-.033.329zM30.026 14.144c-.01-.049-.015-.1-.026-.144.011.05.013.093.023.143zM34.491 11.553zM39.287 12.255l.161-.049zM34.919 11.9zM35.805 12.34c.1.034.2.064.3.089-.098-.029-.199-.055-.3-.089zM37.609 12.559zM34.366 11.438A3.805 3.805 0 0 1 34 11a3.892 3.892 0 0 0 .366.438zM39.576 12.164l.085-.03z"
                        fill="#00ac0d"
                        opacity="1"
                        data-original="#00ac0d"
                      ></path>
                    </g>
                    <path
                      fill="#00ce23"
                      d="M35.642 12.281c.054.021.109.04.163.059-.054-.019-.105-.04-.163-.059zM35.193 12.072c.054.029.108.055.162.082a8.178 8.178 0 0 1-.162-.082zM26.9 10.608a2 2 0 0 0 .07-.279 2.371 2.371 0 0 1-.07.279zM36.109 12.429zM34.765 11.792c.05.039.1.071.154.106-.052-.035-.104-.067-.154-.106zM36.59 12.521c.043.006.086.013.129.017-.043-.004-.086-.011-.129-.017zM38.848 12.373l.092-.023zM38.48 12.451l.033-.006zM39.8 12.084l-.139.05c.052-.018.1-.034.139-.05zM39.448 12.206l.128-.042zM37.174 12.567h-.091c.03-.003.061 0 .091 0zM39.174 12.288l.113-.033zM34.491 11.553c-.041-.04-.085-.074-.125-.115.04.041.084.075.125.115z"
                      opacity="1"
                      data-original="#00ce23"
                    ></path>
                    <path
                      fill="#00ce23"
                      d="M39.8 12.084a3.938 3.938 0 0 1-.139.05l-.085.03-.128.042-.161.049-.113.033c-.074.021-.153.041-.234.062l-.092.023c-.107.025-.219.049-.335.072l-.033.006a6.722 6.722 0 0 1-.861.108h-.01a5.682 5.682 0 0 1-.435.008h-.091c-.121 0-.242-.012-.364-.025-.043 0-.086-.011-.129-.017a4.709 4.709 0 0 1-.481-.092c-.1-.025-.2-.055-.3-.089-.054-.019-.109-.038-.163-.059a3.204 3.204 0 0 1-.287-.127c-.054-.027-.108-.053-.162-.082a3.496 3.496 0 0 1-.274-.174c-.052-.035-.1-.067-.154-.106a3.777 3.777 0 0 1-.274-.239c-.041-.04-.085-.074-.125-.115A3.892 3.892 0 0 1 34 11c-1.05-1.47-4.19-2.05-6-2h-1.66a9.561 9.561 0 0 0 .66 1 1.782 1.782 0 0 1-.033.329 2 2 0 0 1-.07.279c2.066 1.292 7.41 3.966 12.903 1.476z"
                      opacity="1"
                      data-original="#00ce23"
                    ></path>
                    <path
                      fill="#00ac0d"
                      d="m26.786 10.887-.012-.011a1.964 1.964 0 0 1-1.21 1.034 1.975 1.975 0 0 0 1.222-1.023z"
                      opacity="1"
                      data-original="#00ac0d"
                    ></path>
                    <path
                      fill="#00ce23"
                      d="M29.13 20.824c.417-.6 1.673-2.829.893-6.681a31.643 31.643 0 0 1-3.992-1.065z"
                      opacity="1"
                      data-original="#00ce23"
                    ></path>
                    <path
                      fill="#00ac0d"
                      d="M39.8 12.084c-5.493 2.49-10.837-.189-12.9-1.476a2.052 2.052 0 0 1-.111.279A2.051 2.051 0 0 1 25 12h-1.12a2.024 2.024 0 0 1-.939-.243 20.656 20.656 0 0 0 3.09 1.321 31.643 31.643 0 0 0 3.992 1.065c-.01-.05-.012-.093-.023-.143 0 0 7.99 1.73 9.99-1.99zM21.215 10.632a11.818 11.818 0 0 0 1.577 1.045 1.9 1.9 0 0 1-.692-.767c-.1-.191-.179-.421-.264-.646a8.368 8.368 0 0 1-.621.368zM21.42 8.91z"
                      opacity="1"
                      data-original="#00ac0d"
                    ></path>
                    <path
                      fill="#008906"
                      d="M21.65 9.726z"
                      opacity="1"
                      data-original="#008906"
                    ></path>
                    <path
                      fill="#00ac0d"
                      d="M21.215 10.632c.224-.122.436-.245.621-.368a9.621 9.621 0 0 1-.186-.538 10.362 10.362 0 0 1-.23-.816L21 9c-.462 0-.89.029-1.3.069a6.941 6.941 0 0 0 1.515 1.563z"
                      opacity="1"
                      data-original="#00ac0d"
                    ></path>
                    <path
                      fill="#008906"
                      d="M23.88 12a2 2 0 0 1-1.456-.623 9.58 9.58 0 0 0-4.377 9.544C18.423 20.3 21.142 15.864 23 15l1-3z"
                      opacity="1"
                      data-original="#008906"
                    ></path>
                    <path
                      fill="#025602"
                      d="M22.792 11.677a13.04 13.04 0 0 1-.912-.557l-2.974 2.974a1 1 0 0 0 .192 1.565l.788.473a1 1 0 0 0 1.161-.094l3.958-3.35a19.3 19.3 0 0 1-2.064-.931c-.05-.027-.101-.049-.149-.08z"
                      opacity="1"
                      data-original="#025602"
                    ></path>
                    <path
                      fill="#016601"
                      d="M25 12h-1.12a1.872 1.872 0 0 1-.492-.067 2.009 2.009 0 0 1-.447-.176 19.3 19.3 0 0 0 2.064.931L27 11l-.242-.061A1.986 1.986 0 0 1 25 12zM22.792 11.677a1.918 1.918 0 0 1-.394-.331 1.8 1.8 0 0 1-.3-.436v-.007l-.217.217c.286.191.588.377.912.557z"
                      opacity="1"
                      data-original="#016601"
                    ></path>
                    <path
                      fill="#00ce23"
                      d="M27 10a9.561 9.561 0 0 1-.66-1 8.532 8.532 0 0 1-.5-8h-3.5a1.158 1.158 0 0 0-.3.185C22.331 6.152 24.437 10 27 10z"
                      opacity="1"
                      data-original="#00ce23"
                    ></path>
                    <ellipse
                      cx="37"
                      cy="20"
                      fill="#f6fafd"
                      rx="1.65"
                      ry="2.297"
                      transform="rotate(-45 37.018 20.01)"
                      opacity="1"
                      data-original="#f6fafd"
                    ></ellipse>
                    <ellipse
                      cx="41"
                      cy="21"
                      fill="#f6fafd"
                      rx=".825"
                      ry="1.148"
                      transform="rotate(-45 41.02 21.01)"
                      opacity="1"
                      data-original="#f6fafd"
                    ></ellipse>
                    <ellipse
                      cx="31"
                      cy="12"
                      fill="#b3ffd2"
                      rx=".825"
                      ry="1.148"
                      transform="rotate(-45 31.014 12.006)"
                      opacity="1"
                      data-original="#b3ffd2"
                    ></ellipse>
                    <ellipse
                      cx="37.746"
                      cy="23.5"
                      fill="#f6fafd"
                      rx=".413"
                      ry=".574"
                      transform="rotate(-45 37.764 23.512)"
                      opacity="1"
                      data-original="#f6fafd"
                    ></ellipse>
                    <ellipse
                      cx="28.746"
                      cy="10.5"
                      fill="#b3ffd2"
                      rx=".413"
                      ry=".574"
                      transform="rotate(-45 28.76 10.506)"
                      opacity="1"
                      data-original="#b3ffd2"
                    ></ellipse>
                    <ellipse
                      cx="16"
                      cy="42"
                      fill="#aa1313"
                      rx="1.65"
                      ry="2.297"
                      transform="rotate(-45 16.007 42.021)"
                      opacity="1"
                      data-original="#aa1313"
                    ></ellipse>
                    <ellipse
                      cx="12"
                      cy="39"
                      fill="#aa1313"
                      rx=".825"
                      ry="1.148"
                      transform="rotate(-45 12.006 39.02)"
                      opacity="1"
                      data-original="#aa1313"
                    ></ellipse>
                    <ellipse
                      cx="13.746"
                      cy="38.5"
                      fill="#aa1313"
                      rx=".413"
                      ry=".574"
                      transform="rotate(-45 13.752 38.52)"
                      opacity="1"
                      data-original="#aa1313"
                    ></ellipse>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default CanBeChef;