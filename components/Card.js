import React from "react";

const starSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30.472"
    height="29.069"
    viewBox="0 0 30.472 29.069"
    className="w-6 h-6 mr-1"
  >
    <path
      id="Path_108"
      data-name="Path 108"
      d="M4937.249,850.357a.969.969,0,0,1-.14-.011,1.117,1.117,0,0,1-.991-1.291c.195-1.266.411-2.53.627-3.793l.319-1.884c.173-1.018.345-2.037.528-3.053a.732.732,0,0,0-.263-.711l-2.878-2.791q-1.64-1.593-3.282-3.18a1.184,1.184,0,0,1-.425-1.279,1.154,1.154,0,0,1,1.071-.845q1.9-.273,3.8-.555c1.525-.223,3.045-.447,4.567-.663a1.018,1.018,0,0,0,.881-.623c1.236-2.554,2.5-5.1,3.757-7.64a1.243,1.243,0,0,1,1.1-.75,1.149,1.149,0,0,1,.734.276,1.64,1.64,0,0,1,.388.56l.929,1.873q1.436,2.894,2.866,5.791a.739.739,0,0,0,.633.457q2.994.415,5.985.853l2.6.375a1.172,1.172,0,0,1,.675,2.067s-5.051,4.926-6.2,6.04a.754.754,0,0,0-.253.742q.486,2.725.954,5.456l.493,2.837a1.453,1.453,0,0,1-.141,1.216,1.178,1.178,0,0,1-1.011.491,1.548,1.548,0,0,1-.63-.211l-2.823-1.476q-2.4-1.253-4.787-2.509a.747.747,0,0,0-.782,0q-2.594,1.377-5.2,2.742l-2.4,1.265A1.525,1.525,0,0,1,4937.249,850.357Z"
      transform="translate(-4930.691 -821.288)"
      fill="#f9b000"
    />
  </svg>
);

const starFrame = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30.472"
    height="29.069"
    viewBox="0 0 30.472 29.069"
    className="w-6 h-6 mr-1"
  >
    <path
      id="Path_110"
      data-name="Path 110"
      d="M5053.2,850.357a.958.958,0,0,1-.14-.011,1.117,1.117,0,0,1-.991-1.291c.2-1.266.411-2.53.627-3.793l.319-1.884c.173-1.018.345-2.037.528-3.053a.732.732,0,0,0-.263-.711l-2.878-2.791q-1.639-1.593-3.282-3.18a1.185,1.185,0,0,1-.425-1.279,1.155,1.155,0,0,1,1.071-.845q1.9-.273,3.8-.555c1.525-.223,3.045-.447,4.567-.663a1.018,1.018,0,0,0,.881-.623c1.236-2.554,2.5-5.1,3.757-7.64a1.244,1.244,0,0,1,1.1-.75,1.147,1.147,0,0,1,.734.276,1.635,1.635,0,0,1,.388.56l.929,1.873q1.436,2.894,2.866,5.791a.738.738,0,0,0,.633.457q2.994.415,5.986.853l2.6.375a1.172,1.172,0,0,1,.675,2.067s-5.051,4.926-6.2,6.04a.753.753,0,0,0-.253.742q.486,2.725.954,5.456l.493,2.837a1.451,1.451,0,0,1-.141,1.216,1.178,1.178,0,0,1-1.011.491,1.552,1.552,0,0,1-.63-.211l-2.823-1.476q-2.4-1.253-4.787-2.509a.831.831,0,0,0-.4-.112.818.818,0,0,0-.387.109q-2.594,1.377-5.2,2.742l-2.4,1.265A1.525,1.525,0,0,1,5053.2,850.357Zm-2.46-16.461c.092.1.165.178.243.253l.693.674q1.941,1.888,3.886,3.771a1.2,1.2,0,0,1,.435,1.1c-.169,1.028-.346,2.055-.523,3.081l-.726,4.266.66-.323,1.537-.806c1.4-.733,2.8-1.465,4.184-2.214a1.6,1.6,0,0,1,.767-.215,1.644,1.644,0,0,1,.777.218c1.527.814,3.06,1.614,4.594,2.413l1.106.577a.556.556,0,0,0,.311.124.4.4,0,0,0,.163-.036l.128-.058-.013-.141a1.94,1.94,0,0,0-.019-.2l-.29-1.672c-.278-1.607-.556-3.214-.844-4.819a1.342,1.342,0,0,1,.4-1.32q1.557-1.5,3.1-3.021l.839-.823c.216-.21.427-.422.653-.649l.631-.631-2.313-.335c-1.648-.24-3.269-.476-4.891-.7a1.34,1.34,0,0,1-1.118-.8q-1.254-2.56-2.531-5.111l-.342-.687a.8.8,0,0,0-.284-.41l-.183-.12-.3.579-.713,1.446q-1.075,2.181-2.143,4.355a1.185,1.185,0,0,1-.926.735q-1.581.237-3.16.465l-1.877.276-2.294.348Z"
      transform="translate(-5046.644 -821.288)"
      fill="#f9b000"
    />
  </svg>
);

const Card = ({
  svg,
  title,
  star,
  starPoint,
  advertisementCount,
  date,
  stock,
  price,
  itemCount = null,
}) => {
  const Info = () => (
    <div className="grid absolute left-[60%] top-0 z-10 py-6 px-8 border bg-[#E5F3F3] rounded-xl info w-max border-[#00B1B2] ">
      <div className="flex justify-center items-center">
        <div className="w-max h-max rounded-full border border-[#00B1B2] px-5 py-5 flex items-center justify-center mr-6 bg-white">
          {svg}
        </div>
        <div className="flex flex-col justify-center border-r-2 border-[#AFD3D2] py-2 pr-4">
          <div className="text-[#7E8096] font-bold text-xl">{title}</div>
          <div className="flex items-center">
            <div className="flex">
              {Array(star)
                .fill()
                .map((_) => starSvg)}
            </div>
            <div className="flex">
              {Array(5 - star)
                .fill()
                .map((_) => starFrame)}
            </div>
            <div className="px-2 text-[#F9B000] text-[1.5rem] font-bold">
              {starPoint}
            </div>
          </div>
          <div className="text-[#7E8096] tracking-tight font-medium">
            {advertisementCount} İlan
          </div>
        </div>
        <div className="text-sm pl-3 max-w-[8rem] h-full text-left">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh.
        </div>
      </div>
      <div className="flex">
        <div>
          <div>
            <div className="flex items-center py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36.915"
                height="36.918"
                viewBox="0 0 36.915 36.918"
                className="w-7 h-7 mr-2"
              >
                <path
                  id="Union_1"
                  data-name="Union 1"
                  d="M5143.989,1369.007a17.516,17.516,0,0,1-7.622-10.776c-1.758-7.622.417-14.031,6.429-19.052a17.528,17.528,0,0,1,9.6-3.9c.248-.027.5-.057.747-.086h2.235c.116.023.23.053.348.07.641.087,1.29.135,1.924.261a18.341,18.341,0,0,1,11.215,6.9c.306.392.589.8.938,1.283v-.435c0-1.176-.009-2.355,0-3.531a1.371,1.371,0,0,1,.881-1.328,1.325,1.325,0,0,1,1.532.28,3.638,3.638,0,0,1,.466.753v5.12a11.566,11.566,0,0,1-.708,1.827,4.286,4.286,0,0,1-3.676,2.19c-1.561.061-3.125.031-4.687.013a1.434,1.434,0,0,1,.018-2.868c.814-.014,1.629-.012,2.445-.01l1.087,0h.5c-.445-.627-.815-1.213-1.248-1.747a15.222,15.222,0,0,0-9.084-5.569,15.55,15.55,0,0,0-15.706,24.368,15.26,15.26,0,0,0,9.409,6.126,14.986,14.986,0,0,0,4.121.3,3.544,3.544,0,0,1,.895.026,1.4,1.4,0,0,1,1.123,1.469,1.436,1.436,0,0,1-1.316,1.348q-.838.066-1.658.066A17.887,17.887,0,0,1,5143.989,1369.007Zm15.923.528a1.389,1.389,0,0,1,.636-1.583,15.366,15.366,0,0,1,1.511-.757,1.415,1.415,0,0,1,1.81.67,1.4,1.4,0,0,1-.486,1.839,16.782,16.782,0,0,1-1.568.8,1.662,1.662,0,0,1-.417.1A1.473,1.473,0,0,1,5159.913,1369.536Zm6.221-3.514a1.405,1.405,0,0,1-.273-1.882,16.81,16.81,0,0,1,1.088-1.342,1.273,1.273,0,0,1,1.029-.427,1.412,1.412,0,0,1,1.225,2.133,9.1,9.1,0,0,1-1.2,1.479,1.294,1.294,0,0,1-.934.382A1.458,1.458,0,0,1,5166.134,1366.021Zm-6.3-5.777-6.595-3.549a1.428,1.428,0,0,1-.749-1.351l-.776-12.016a1.431,1.431,0,0,1,2.856-.184l.737,11.415,5.881,3.166a1.43,1.43,0,1,1-1.354,2.52Zm10.363-.177a1.506,1.506,0,0,1-1.061-1.644,16.875,16.875,0,0,1,.539-1.8,1.416,1.416,0,0,1,2.667.811,11.3,11.3,0,0,1-.465,1.806,1.332,1.332,0,0,1-1.31.87A1.762,1.762,0,0,1,5170.2,1360.068Z"
                  transform="translate(-5135.777 -1335.188)"
                  fill="#ff792e"
                />
              </svg>
              <div className="font-medium text-lg text-[#FF792E] tracking-tighter">
                15:55’e Kadar Aynı Gün Kargo
              </div>
            </div>
          </div>
          <div className="flex items-center pb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42.168"
              height="31.322"
              viewBox="0 0 42.168 31.322"
              className="w-7 h-7 mr-2"
            >
              <path
                id="Path_144"
                data-name="Path 144"
                d="M5155.706,1399.381c-1.123,0-2.246,0-3.369,0s-2.247,0-3.37,0c-.606,0-.978.309-.988.806s.372.839.994.84q3.371,0,6.74,0c.6,0,.978-.31.989-.805S5156.326,1399.382,5155.706,1399.381Zm-12.66,16.472a1.646,1.646,0,1,0,1.634,1.658A1.65,1.65,0,0,0,5143.046,1415.853Zm-.817-19.764a.821.821,0,1,0,.8.819A.829.829,0,0,0,5142.229,1396.089Zm32.723,13.057q-2.061-4.117-4.121-8.234a2.563,2.563,0,0,0-2.5-1.535c-2.072.012-4.144,0-6.217,0h-.464v-.5q0-2.511,0-5.023a2.489,2.489,0,0,0-2.711-2.714h-23.055a2.493,2.493,0,0,0-2.729,2.736q0,9.656,0,19.309c0,.577,0,1.153,0,1.729a2.476,2.476,0,0,0,2.6,2.581c.659,0,1.317,0,1.976,0,.112,0,.224.012.342.019a4.967,4.967,0,0,0,9.934,0h15.762a4.965,4.965,0,0,0,8.706,3.248h.008l.018-.03a4.943,4.943,0,0,0,1.2-3.236.276.276,0,0,1,.1-.18,2.737,2.737,0,0,0,1.518-1.88v-5.518C5175.2,1409.663,5175.08,1409.4,5174.952,1409.146Zm-31.536,11.62h.027a3.005,3.005,0,0,1-.818,0h.008a3.292,3.292,0,0,1,.447-6.56,3.262,3.262,0,0,1,.329.02l.026,0c.1.012.2.028.3.049l.01,0a3.292,3.292,0,0,1-.328,6.484Zm16.584-4.934c-.152.007-.284.019-.415.019-3.828,0-7.657,0-11.485.008a.508.508,0,0,1-.439-.167,4.967,4.967,0,0,0-9.264.025.437.437,0,0,1-.386.142c-.727-.021-1.454-.005-2.182-.008s-1.026-.288-1.03-1.016c0-.191,0-.382,0-.63.8,0,1.554,0,2.307,0,.678,0,.983-.3.986-.978q.007-1.5,0-3.005a.846.846,0,0,0-.965-.957c-.754,0-1.509,0-2.328,0v-.444q0-7.471,0-14.943c0-.813.272-1.084,1.086-1.084H5158.9c.844,0,1.1.261,1.1,1.108v21.932Zm-25.178-3.3v-1.6h1.594v1.6Zm35.541-8.2a.533.533,0,0,1,.4.166c.8,1.558,1.576,3.127,2.387,4.752h-8.186v-4.925h1.816C5167.976,1404.322,5169.17,1404.316,5170.363,1404.329Zm-1.248,16.437h.024a3.016,3.016,0,0,1-.819,0h.011a3.3,3.3,0,1,1,.784,0Zm4.546-5.843a3.094,3.094,0,0,1-.208.727l-.121-.021a4.968,4.968,0,0,0-9.244.1.422.422,0,0,1-.367.129c-.671-.019-1.342-.006-2.044-.006v-14.823c2.308,0,4.585-.01,6.862.015a.93.93,0,0,1,.65.348,10.608,10.608,0,0,1,.679,1.282h-.465q-2.552,0-5.107,0c-.7,0-1,.3-1,1q0,3.109,0,6.218c0,.727.293,1.014,1.032,1.014h9.344v1.749C5173.671,1413.414,5173.689,1414.169,5173.661,1414.923Zm-17.834-18.836c-.054,0-.109,0-.164,0h-9.951a2.006,2.006,0,0,0-.328.013.82.82,0,0,0,.01,1.623,2.847,2.847,0,0,0,.37.011h8.429c.548,0,1.1.008,1.645,0a.826.826,0,0,0,.864-.8A.835.835,0,0,0,5155.827,1396.087Zm12.91,19.766a1.646,1.646,0,1,0,1.638,1.654A1.648,1.648,0,0,0,5168.737,1415.853Z"
                transform="translate(-5133.15 -1391.144)"
                fill="#86bc25"
              />
            </svg>
            <div className="font-medium text-lg">500 TL’ye Kargo Bedava</div>
          </div>
          <div className="flex items-center pb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35.036"
              height="37.289"
              viewBox="0 0 35.036 37.289"
              className="w-7 h-7 mr-2"
            >
              <path
                id="Path_145"
                data-name="Path 145"
                d="M5154.239,1478.092a1.267,1.267,0,0,1-.561-.141c-6.042-2.925-11.355-5.489-16.244-7.838a1.119,1.119,0,0,1-.717-1.129c.011-6.257.011-12.66,0-19.033a1.121,1.121,0,0,1,.711-1.133c4.964-2.383,10-4.818,14.881-7.172l1.269-.613a1.554,1.554,0,0,0,.187-.115c.036-.025.073-.049.109-.073l.067-.042h.574l.058.029.726.367c.512.26,1.041.528,1.565.782,4.5,2.175,9.336,4.511,14.211,6.854a1.079,1.079,0,0,1,.678,1.08c-.01,6.426-.01,12.854,0,19.1a1.079,1.079,0,0,1-.684,1.077c-5.233,2.518-10.557,5.088-16.274,7.856A1.254,1.254,0,0,1,5154.239,1478.092Zm4.048-23.1a.769.769,0,0,1,.621.323.75.75,0,0,1,.15.638.934.934,0,0,1-.534.615l-.358.176c-.95.464-1.933.945-2.91,1.4-.183.085-.217.139-.217.343.009,4.849.008,9.778.008,14.546v3l3.04-1.467q5.949-2.87,11.9-5.735c.127-.062.145-.091.145-.241q-.009-7.446-.006-14.894v-2.714l-1.075.519c-1.075.52-2.187,1.058-3.285,1.578-.061.029-.061.029-.061.184q0,.984,0,1.968c0,1.309,0,2.662.007,3.992a1.057,1.057,0,0,1-.668,1.057c-.849.4-1.708.815-2.539,1.217l-1.079.52a1.449,1.449,0,0,1-.625.171c-.278,0-.746-.133-.746-1.027v-1.132c0-1.548,0-3.149.008-4.724,0-.182-.031-.232-.206-.317-5.392-2.6-10.256-4.938-15.176-7.334a1.266,1.266,0,0,0-.559-.156,1.107,1.107,0,0,0-.513.144c-1.1.566-2.2,1.089-3.359,1.643l-.839.4,10.544,5.091.156.074a5.609,5.609,0,0,1,.506.26.769.769,0,0,1,.317,1.028.742.742,0,0,1-.7.462,1.033,1.033,0,0,1-.237-.028,1.291,1.291,0,0,1-.293-.118l-.06-.029-10.191-4.919-1.1-.53v3.131c0,4.772,0,9.707-.008,14.56,0,.081,0,.081.151.154l14.28,6.894c.212.1.426.2.654.31V1462.9c0-1.463,0-2.976.006-4.464,0-.2-.031-.219-.145-.264-.314-.124-.616-.277-.907-.426l-.151-.076a.824.824,0,0,1-.439-1.13.76.76,0,0,1,.7-.435,1.039,1.039,0,0,1,.43.1l.108.049c.333.153.678.31,1.008.493a.382.382,0,0,0,.194.061.494.494,0,0,0,.218-.064c.687-.341,1.389-.678,2.067-1q.646-.311,1.292-.623A1.09,1.09,0,0,1,5158.287,1454.987Zm5.427-.92c-.654.317-1.272.617-1.9.906-.129.059-.146.088-.145.238.007,1.14.007,2.3.006,3.419q0,.726,0,1.454l.254-.123c.733-.352,1.426-.685,2.119-1.034a.4.4,0,0,0,.027-.135c.008-.993.007-2,.007-2.98v-1.924Zm-17-7.224c4.59,2.216,9.336,4.508,14.008,6.752a.251.251,0,0,0,.1.016.333.333,0,0,0,.127-.022c.7-.323,1.4-.667,2.08-1l.331-.161-2.256-1.087q-1.626-.785-3.253-1.569l-2.326-1.123q-3.388-1.638-6.78-3.269a.566.566,0,0,0-.225-.056.123.123,0,0,0-.037,0c-.737.338-1.459.69-2.223,1.062l-.239.117Zm4.568-2.047c4.528,2.187,9.211,4.449,13.821,6.664a.309.309,0,0,0,.12.02.334.334,0,0,0,.132-.023c.938-.439,1.887-.9,2.805-1.343l.9-.437-2.774-1.34q-5.955-2.875-11.911-5.743a.47.47,0,0,0-.178-.045l-.019,0c-1.115.525-2.217,1.058-3.383,1.623l-.4.194Zm-8.974,23.325a.723.723,0,0,1-.294-.064c-.834-.374-1.681-.781-2.59-1.245a.736.736,0,0,1-.378-.434.8.8,0,0,1,.075-.619.775.775,0,0,1,.678-.448.8.8,0,0,1,.339.079c.974.451,1.775.839,2.52,1.22a.881.881,0,0,1,.341.368c.012.019.021.037.03.049l.052.072,0,.095a.844.844,0,0,1-.778.927Zm2.159-1.521a.764.764,0,0,1-.288-.052c-.46-.186-.908-.408-1.343-.623-.151-.075-.3-.15-.455-.223l-.676-.327c-.71-.342-1.443-.695-2.162-1.051a.893.893,0,0,1-.52-.695.767.767,0,0,1,.32-.688.965.965,0,0,1,.292-.14c.03-.01.06-.02.089-.032l.094-.039.1.033.114.036a1.762,1.762,0,0,1,.268.1l.426.2c1.332.64,2.71,1.3,4.058,1.966a1,1,0,0,1,.512.567.814.814,0,0,1-.246.8,1.109,1.109,0,0,1-.579.165Z"
                transform="translate(-5136.717 -1440.803)"
                fill="#4cbec5"
              />
            </svg>
            <div className="font-medium text-lg">Min. 100 TL</div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end gap-4 pl-12">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="208.201"
              height="51.144"
              viewBox="0 0 208.201 51.144"
              className="w-36"
            >
              <g
                id="Group_97"
                data-name="Group 97"
                transform="translate(-5578.964 -1353.189)"
              >
                <g id="Group_91" data-name="Group 91">
                  <path
                    id="Path_148"
                    data-name="Path 148"
                    d="M5627.222,1356.528c.746-1.275-.512-2.683-2.769-3.17-2.24-.48-4.7.114-5.531,1.348l-28.766,42.776c-1.621,2.416-.6,5.42,2.5,6.472,3.135,1.068,6.993-.244,8.519-2.86Z"
                    fill="#0069b3"
                  />
                  <path
                    id="Path_149"
                    data-name="Path 149"
                    d="M5580.32,1404.166a1.845,1.845,0,0,1-.911-2.994l16.334-22.482a2.877,2.877,0,0,0,0-3.488l-14.864-18.231c-.953-1.169.124-2.688,2.358-3.4,2.205-.708,4.778-.392,5.793.716L5604.1,1370.8a2.59,2.59,0,0,1,0,3.257l-19.781,28.8A3.673,3.673,0,0,1,5580.32,1404.166Z"
                    fill="#0069b3"
                  />
                  <path
                    id="Path_150"
                    data-name="Path 150"
                    d="M5646.964,1353.273a2.54,2.54,0,0,0-2.394.575l-25.607,19.435s-1.812,1.415.364,3.6l24.82,25.073c2.349,2.372,6.479,3.1,9.071,1.538,2.538-1.532,2.545-4.6.122-6.831l-25.555-23.508c-.943-.868-1.055-1.133-.085-1.905l20.695-16.509C5648.881,1354.263,5648.023,1353.491,5646.964,1353.273Z"
                    fill="#ee7d00"
                  />
                </g>
                <g id="Group_92" data-name="Group 92">
                  <path
                    id="Path_151"
                    data-name="Path 151"
                    d="M5733.009,1379.735a1.562,1.562,0,1,1-2.208,2.211l-5.733-5.733a1.562,1.562,0,0,1,0-2.212l5.733-5.733a1.561,1.561,0,0,1,2.208,2.208l-4.625,4.632Z"
                    fill="#ee7d00"
                  />
                </g>
                <g id="Group_93" data-name="Group 93">
                  <path
                    id="Path_152"
                    data-name="Path 152"
                    d="M5758.209,1369.363a1.564,1.564,0,0,1-1.565,1.561,4.185,4.185,0,0,0-4.18,4.184v5.742a1.563,1.563,0,0,1-3.125,0v-5.742a7.315,7.315,0,0,1,7.305-7.307A1.567,1.567,0,0,1,5758.209,1369.363Z"
                    fill="#ee7d00"
                  />
                </g>
                <path
                  id="Path_153"
                  data-name="Path 153"
                  d="M5740.807,1367.8a7.305,7.305,0,1,0,4.2,13.277,1.56,1.56,0,0,0,3.1-.228v-5.742A7.313,7.313,0,0,0,5740.807,1367.8Zm0,11.485a4.181,4.181,0,1,1,4.176-4.178A4.181,4.181,0,0,1,5740.807,1379.286Z"
                  fill="#ee7d00"
                />
                <g id="Group_94" data-name="Group 94">
                  <path
                    id="Path_154"
                    data-name="Path 154"
                    d="M5692.136,1369.363a1.563,1.563,0,0,1-1.563,1.561,4.188,4.188,0,0,0-4.182,4.184v5.742a1.561,1.561,0,1,1-3.121,0v-5.742a7.312,7.312,0,0,1,7.3-7.307A1.566,1.566,0,0,1,5692.136,1369.363Z"
                    fill="#0069b3"
                  />
                </g>
                <path
                  id="Path_155"
                  data-name="Path 155"
                  d="M5680.413,1367.8a1.565,1.565,0,0,0-1.565,1.562v5.9a4.027,4.027,0,0,1-8.054,0v-5.9a1.563,1.563,0,0,0-3.126,0v5.9a7.156,7.156,0,0,0,14.311,0v-5.9A1.567,1.567,0,0,0,5680.413,1367.8Z"
                  fill="#0069b3"
                />
                <path
                  id="Path_156"
                  data-name="Path 156"
                  d="M5698.606,1367.8h-2.343v-2.59a1.56,1.56,0,0,0-3.12,0v15.639a1.56,1.56,0,1,0,3.12,0v-9.923h2.343a1.563,1.563,0,1,0,0-3.126Z"
                  fill="#0069b3"
                />
                <g id="Group_95" data-name="Group 95">
                  <path
                    id="Path_157"
                    data-name="Path 157"
                    d="M5703,1367.8a1.563,1.563,0,0,0-1.561,1.562v11.487a1.562,1.562,0,1,0,3.124,0v-11.487A1.564,1.564,0,0,0,5703,1367.8Z"
                    fill="#0069b3"
                  />
                  <path
                    id="Path_158"
                    data-name="Path 158"
                    d="M5703,1363.652a1.591,1.591,0,1,0,1.593,1.6A1.6,1.6,0,0,0,5703,1363.652Z"
                    fill="#0069b3"
                  />
                </g>
                <path
                  id="Path_159"
                  data-name="Path 159"
                  d="M5722.038,1367.8a1.561,1.561,0,0,0-1.56,1.562v11.487a1.562,1.562,0,1,0,3.123,0v-11.487A1.564,1.564,0,0,0,5722.038,1367.8Z"
                  fill="#0069b3"
                />
                <path
                  id="Path_160"
                  data-name="Path 160"
                  d="M5720.44,1365.248a1.6,1.6,0,1,1,1.6,1.587A1.6,1.6,0,0,1,5720.44,1365.248Z"
                  fill="#0069b3"
                />
                <g id="Group_96" data-name="Group 96">
                  <path
                    id="Path_161"
                    data-name="Path 161"
                    d="M5716.329,1378.064a4.183,4.183,0,1,1,0-5.914,1.563,1.563,0,0,0,2.212-2.208,7.305,7.305,0,1,0-6.721,12.3c0,.057-.01.11-.01.169v1.56c0,.866,3.124.866,3.124,0v-1.56c0-.059,0-.112-.007-.169a7.288,7.288,0,0,0,3.614-1.975,1.561,1.561,0,0,0-2.212-2.2Z"
                    fill="#0069b3"
                  />
                </g>
                <path
                  id="Path_162"
                  data-name="Path 162"
                  d="M5779.862,1367.8a7.305,7.305,0,1,0,7.3,7.307A7.312,7.312,0,0,0,5779.862,1367.8Zm0,11.485a4.181,4.181,0,1,1,4.181-4.178A4.184,4.184,0,0,1,5779.862,1379.286Z"
                  fill="#ee7d00"
                />
                <path
                  id="Path_163"
                  data-name="Path 163"
                  d="M5771.788,1383.467a7.228,7.228,0,0,1-7.153,7.307c-3.173,0-2.618-2.01-2.618-2.01a1.535,1.535,0,0,1,1.486-1.2c.3,0,.6.088,1.132.088a4.113,4.113,0,0,0,4.029-4.187v-2.376a7.228,7.228,0,0,1-4.184,1.321,7.305,7.305,0,1,1,7.307-7.3Zm-3.124-8.359a4.18,4.18,0,1,0-4.183,4.178A4.186,4.186,0,0,0,5768.664,1375.108Z"
                  fill="#ee7d00"
                />
                <path
                  id="Path_164"
                  data-name="Path 164"
                  d="M5659.166,1387.65a4.106,4.106,0,0,0,4.022-4.183l0-2.376a6.794,6.794,0,0,1-4.026,1.321,7.074,7.074,0,0,1-7.149-7.18v-5.869a1.56,1.56,0,1,1,3.12,0v5.869a4.025,4.025,0,1,0,8.051.028v-5.9a1.563,1.563,0,0,1,3.125,0v14.1a7.231,7.231,0,0,1-7.147,7.307c-3.177,0-2.621-2.01-2.621-2.01a1.536,1.536,0,0,1,1.482-1.2C5658.326,1387.562,5658.625,1387.65,5659.166,1387.65Z"
                  fill="#0069b3"
                />
                <path
                  id="Path_165"
                  data-name="Path 165"
                  d="M5749.947,1390.787h0Z"
                  fill="#0069b3"
                />
              </g>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="211.965"
              height="40.819"
              viewBox="0 0 211.965 40.819"
              className="w-36"
            >
              <g
                id="Group_98"
                data-name="Group 98"
                transform="translate(-5575.541 -1437.568)"
              >
                <path
                  id="Path_166"
                  data-name="Path 166"
                  d="M5692.9,1459.741h-8.25v8.854s-.363,1.085-1.269,1.085c0,0-1.451,0-1.451-1.085v-10.752s1.179-6.415,7.072-3.524v-2.8s-9.52-3.885-14.687,5.06c0,0-3.627,7.409,2.356,13.011,0,0,2.539,2.711,7.979,2.711,0,0,4.9.181,8.25-2.44v-10.119Zm-40.525,12.288v-20.6h-5.893l-5.349,7.409-4.8-7.409h-6.256v20.691h2.9v-8.493l4.8,7.68,5.712-7.59v8.313Zm19.22-20.782H5668.6v8.584l-5.168-8.4H5654.1v20.51h2.811v-8.4l5.167,8.4h9.52v-20.691Z"
                  fill="#312782"
                  fillRule="evenodd"
                />
                <path
                  id="Path_167"
                  data-name="Path 167"
                  d="M5625.64,1468.108a13.8,13.8,0,0,0-1.088,1.174,172.749,172.749,0,0,1-25.294.9c-5.349,1.807-7.888.09-9.882-1.536-1.723-.091-3.446-.271-5.259-.362-1.269,1.627-3.807,1.627-7.525-.09-1.541-.633-1.36-1.265.363-2.078,1.36-.542,3.173-.633,6.89,0,.091.181.907.452.907.632,2.176.091,4.08.091,6.255.181,3.536-.271,4.533-3.072,2.992-5.963-1.178-2.169-2.81-2.982-3.717-5.873-2.538-7.59,5.621-8.855,9.338-17.529a2.269,2.269,0,0,1,.907,1.717,7.463,7.463,0,0,1-.454,4.246c-.181.543-.362,1.175-.544,1.807.544.362,1.27-.723,2.086-2.078.453,1.446.09,3.253-1.179,5.512.635-.452,1.269-.994,1.814-1.446.271,1.084-.273,2.62-1.36,4.7.725-.452,1.178-.723,1.994-1.175a6.942,6.942,0,0,1-1.451,3.614c.725-.271,1.27-.994,2-1.265a8.253,8.253,0,0,1-1.27,4.337c.635-.632.816-.452,1.542-1.084a6.931,6.931,0,0,1-.363,2.71c-.544.814-1.087.723-1,1.808.091.451.272.723.725.542,1.269-1.084,2.358-2.259,3.717-3.343,2.176-1.807,2.992-1.717,5.8-1.627,3.174.091,5.621,1.446,8.613,1.807-1.994,1.717-3.263,1.446-5.8,1.446a17.015,17.015,0,0,0,2,.633,6,6,0,0,1-3.989.632c.09.452,1.088.633,1.269.994a5.592,5.592,0,0,1-2.9.361c.181.452.453.9.634,1.446a3.468,3.468,0,0,1-2.81-.09,5.817,5.817,0,0,0,.363,1.174,11.955,11.955,0,0,1-5.259-.542,1.135,1.135,0,0,0,.091.542c.09,2.982,7.071,3.8,17.86,3.434l2.992-.271Z"
                  fill="#ee7d00"
                  fillRule="evenodd"
                />
                <path
                  id="Path_168"
                  data-name="Path 168"
                  d="M5697.336,1472.176v-20.748h6.232V1461.6l4.111-4.758h6.9l-5.835,5.682,6.63,9.648h-7.293l-3.447-5.418-1.062,1.057v4.361Zm30.234-6.872a12.291,12.291,0,0,1-2.387.793c-1.459.4-2.254.925-2.254,1.586a1.5,1.5,0,0,0,.4,1.057,2.249,2.249,0,0,0,1.327.4,2.766,2.766,0,0,0,3.049-3.04l-.132-.4v-.4Zm.663,6.872-.4-1.454a10.839,10.839,0,0,1-2.652,1.586,11.352,11.352,0,0,1-3.05.4,6.348,6.348,0,0,1-4.111-1.189,4.968,4.968,0,0,1-1.459-3.7,4.1,4.1,0,0,1,1.459-3.3,14.008,14.008,0,0,1,5.3-1.585l1.459-.133c1.857-.265,2.917-.661,2.917-1.586a1.339,1.339,0,0,0-.53-.925,5.216,5.216,0,0,0-1.724-.264,2.394,2.394,0,0,0-1.459.4c-.4.133-.53.529-.663,1.058h-5.967a4.164,4.164,0,0,1,2.122-3.833c1.459-.925,3.448-1.322,6.232-1.322a28.1,28.1,0,0,1,3.448.265,6.5,6.5,0,0,1,2.519,1.057,3.091,3.091,0,0,1,1.592,1.586c.132.4.265.661.4,1.189,0,.4.133.925.133,1.454v8.59a1.663,1.663,0,0,0,.133.793c.132.132.265.4.53.529v.4Zm9.149,0v-15.33h5.7v2.776a5.536,5.536,0,0,1,1.723-2.379,5.668,5.668,0,0,1,3.182-.793h.531v6.078h-.663l-.663-.131a4.385,4.385,0,0,0-2.785.925,3.712,3.712,0,0,0-.795,2.643v6.211Zm18.83-7.8a4.715,4.715,0,0,0,.663,2.775,1.882,1.882,0,0,0,1.857.925,2.1,2.1,0,0,0,1.989-.925,4.722,4.722,0,0,0,.663-2.775,3.8,3.8,0,0,0-.8-2.511,2.325,2.325,0,0,0-3.713,0,4.074,4.074,0,0,0-.663,2.511Zm-5.172,9.515h6.1a1.694,1.694,0,0,0,.53.793,3.943,3.943,0,0,0,1.327.264,2.4,2.4,0,0,0,1.856-.661,5.26,5.26,0,0,0,.531-2.643v-.792a4.807,4.807,0,0,1-1.989,1.057,6.451,6.451,0,0,1-2.387.4,6.166,6.166,0,0,1-5.039-2.115,7.8,7.8,0,0,1-1.989-5.682,8.987,8.987,0,0,1,1.856-5.815,5.648,5.648,0,0,1,4.907-2.246,7.163,7.163,0,0,1,2.917.528,5.658,5.658,0,0,1,2.121,1.851v-1.983h5.569v14.141c0,2.643-.662,4.625-1.988,5.682-1.326,1.19-3.581,1.718-6.763,1.718a10.168,10.168,0,0,1-5.3-1.189,4.9,4.9,0,0,1-2.255-3.3Zm25.063-9.383a5.73,5.73,0,0,0,.663,3.039,2.007,2.007,0,0,0,1.856.925,2.093,2.093,0,0,0,1.989-.925,7.3,7.3,0,0,0,0-6.078,2.093,2.093,0,0,0-1.989-.925,2.007,2.007,0,0,0-1.856.925,5.729,5.729,0,0,0-.663,3.039Zm-6.232,0a7.949,7.949,0,0,1,2.386-6.079c1.459-1.454,3.714-2.115,6.365-2.115a9.168,9.168,0,0,1,6.5,2.115,8.939,8.939,0,0,1,0,12.159,9.172,9.172,0,0,1-6.5,2.114,9.045,9.045,0,0,1-6.365-2.114,7.951,7.951,0,0,1-2.386-6.08Z"
                  fill="#ee7d00"
                  fillRule="evenodd"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-5 border px-6 py-4 rounded-[2.5rem]">
      <div className="flex col-span-2 border-r">
        <div className="w-max h-max rounded-full border border-[#00B1B2] px-5 py-5 flex items-center justify-center mr-6 ">
          {svg}
        </div>
        <div className="flex flex-col justify-center relative">
          <div className="text-[#7E8096] font-bold text-xl card__hover relative">
            {title}
            <Info />
          </div>
          <div className="flex items-center">
            <div className="flex">
              {Array(star)
                .fill()
                .map((_) => starSvg)}
            </div>
            <div className="flex">
              {Array(5 - star)
                .fill()
                .map((_) => starFrame)}
            </div>
            <div className="px-2 text-[#F9B000] text-[1.5rem] font-bold">
              {starPoint}
            </div>
            <div className="text-[#7E8096] tracking-tight font-medium">
              {advertisementCount} İlan
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around w-96 col-span-2">
        <div className="flex flex-col gap-8 px-4 items-start">
          <div className="text-[#4CBEC5] font-medium ">Miad</div>{" "}
          <div className="text-[#7E8096] font-medium">{date}</div>
        </div>
        <div className="flex flex-col gap-8 items-start ">
          <div className="text-[#4CBEC5] font-medium">Stok</div>
          <div className="text-[#7E8096] font-medium">{stock}</div>
        </div>
        <div className="flex flex-col gap-8 items-start ">
          <div className="text-[#4CBEC5] font-bold">Fiyat</div>
          <div className="text-[#7E8096] font-bold">{price}</div>
        </div>
      </div>
      <div>
        {itemCount == null ? (
          <div className="flex items-center justify-center w-full h-full cursor-pointer ">
            <div className="flex px-4 py-2 text-white rounded-full bg-gradient-to-r w-5/6 from-[#FFBE00] to-[#FF7B03] items-center justify-center my-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39.363"
                height="34.815"
                viewBox="0 0 39.363 34.815"
                className="w-6 h-6 mr-1.5"
              >
                <g
                  id="Group_58"
                  data-name="Group 58"
                  transform="translate(-6285.254 -793.329)"
                >
                  <path
                    id="Path_103"
                    data-name="Path 103"
                    d="M6292.58,797.48c1.219-.1,2.4-.2,3.569-.3q4.616-.405,9.231-.815l11.54-1.016c2.01-.176,4.019-.356,6.029-.524a1.542,1.542,0,0,1,1.65,1.891q-.764,6.048-1.507,12.1c-.1.844-.186,1.691-.294,2.534a3.156,3.156,0,0,1-3.008,2.767q-7.137.613-14.273,1.242c-3.187.279-6.381.5-9.557.871-1.49.175-3.855-1.566-4.188-2.981-.236-1.008-.4-2.034-.548-3.06-.51-3.666-1-7.335-1.491-11-.112-.827-.221-1.655-.309-2.485-.028-.261-.125-.347-.384-.342-.725.013-1.451.009-2.176,0a1.516,1.516,0,1,1,.02-3.025c.8,0,1.608,0,2.413,0a3.1,3.1,0,0,1,3.138,2.912C6292.47,796.648,6292.529,797.05,6292.58,797.48Zm.409,3.007c.074.574.14,1.1.211,1.628.436,3.214.867,6.428,1.315,9.64a1.389,1.389,0,0,0,1.616,1.342c1.7-.109,3.392-.266,5.087-.413q5.134-.447,10.264-.9,3.907-.344,7.817-.674c.33-.027.475-.137.519-.505.415-3.487.856-6.971,1.288-10.456.086-.694.162-1.39.248-2.141Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_104"
                    data-name="Path 104"
                    d="M6294.511,822.844a5.3,5.3,0,1,1,5.3,5.3A5.356,5.356,0,0,1,6294.511,822.844Zm3.027-.009a2.319,2.319,0,0,0,2.249,2.281,2.269,2.269,0,1,0,.023-4.538A2.314,2.314,0,0,0,6297.538,822.835Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_105"
                    data-name="Path 105"
                    d="M6314.186,817.55a5.3,5.3,0,1,1-5.294,5.3A5.39,5.39,0,0,1,6314.186,817.55Zm-2.266,5.25a2.32,2.32,0,0,0,2.214,2.316,2.269,2.269,0,1,0,.093-4.538A2.316,2.316,0,0,0,6311.92,822.8Z"
                    fill="#fff"
                  />
                </g>
              </svg>
              <div className="font-medium text-lg w-5/6">Sepete Ekle</div>
            </div>
          </div>
        ) : itemCount === 0 ? (
          <div className="flex items-center justify-center h-full ">
            <div className="border-[#F39200] border rounded-full w-5/6">
              <div className="flex items-center justify-center gap-2.5 px-4  rounded-full border-4 border-[#F4F5F9] ">
                <button className="border-[#F4F5F9] bg-white h-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.212"
                    height="2.852"
                    viewBox="0 0 16.212 2.852"
                  >
                    <rect
                      id="Rectangle_30"
                      data-name="Rectangle 30"
                      width="16.213"
                      height="2.852"
                      rx="1.288"
                      fill="#f39200"
                    />
                  </svg>
                </button>
                <div className="text-[#7E8096] font-medium text-xl bg-[#F4F5F9] h-full py-1 px-6">
                  {itemCount}
                </div>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.212"
                    height="16.212"
                    viewBox="0 0 16.212 16.212"
                  >
                    <path
                      id="Path_135"
                      data-name="Path 135"
                      d="M6477.445,1029.311h-5.393v-5.393a1.286,1.286,0,0,0-1.287-1.287h-.278a1.286,1.286,0,0,0-1.287,1.287v5.393h-5.393a1.287,1.287,0,0,0-1.287,1.287v.277a1.287,1.287,0,0,0,1.287,1.288h5.393v5.393a1.286,1.286,0,0,0,1.287,1.287h.278a1.286,1.286,0,0,0,1.287-1.287v-5.393h5.393a1.287,1.287,0,0,0,1.287-1.288v-.277A1.287,1.287,0,0,0,6477.445,1029.311Z"
                      transform="translate(-6462.52 -1022.631)"
                      fill="#f39200"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="border-[#F39200] border rounded-full w-5/6">
              <div className="flex items-center justify-center gap-2.5 px-4  rounded-full border-4 border-[#F4F5F9] ">
                <button className="border-[#F4F5F9] bg-white h-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.103"
                    height="23.507"
                    viewBox="0 0 19.103 23.507"
                  >
                    <g
                      id="Group_84"
                      data-name="Group 84"
                      transform="translate(-6282.604 -1238.983)"
                    >
                      <path
                        id="Path_139"
                        data-name="Path 139"
                        d="M6293.948,1238.983c.093.029.185.059.279.086a2.2,2.2,0,0,1,1.6,2.087c0,.244,0,.488,0,.765h.254q1.846,0,3.695,0a1.838,1.838,0,0,1,1.928,1.934q0,1.182,0,2.364a.751.751,0,0,1-.85.843h-.284c-.035.71-.07,1.4-.1,2.081q-.177,3.712-.355,7.426c-.062,1.306-.111,2.613-.2,3.918a2.159,2.159,0,0,1-2.114,1.995c-.512.012-1.025,0-1.538,0h-9.592a2.182,2.182,0,0,1-2.254-1.817,13.093,13.093,0,0,1-.1-1.441q-.172-3.61-.339-7.22-.114-2.418-.231-4.835c0-.029-.01-.058-.019-.111-.133,0-.26,0-.388,0a.728.728,0,0,1-.733-.728c-.007-.887-.016-1.775,0-2.662a1.814,1.814,0,0,1,1.807-1.748c1.262-.01,2.524,0,3.786,0h.276v-.65a2.2,2.2,0,0,1,1.8-2.248.375.375,0,0,0,.078-.04Zm-8.73,8.088c.024.535.045,1.045.07,1.556q.175,3.69.352,7.379c.067,1.39.128,2.781.2,4.171.03.6.3.841.906.841q5.439,0,10.876,0a.746.746,0,0,0,.85-.778c.032-.465.046-.932.068-1.4q.123-2.612.246-5.225.149-3.15.3-6.3c0-.081,0-.161,0-.245Zm15.019-1.485v-1.647c0-.451-.1-.549-.553-.549h-15.073c-.425,0-.532.106-.533.523q0,.734,0,1.468c0,.066.008.132.012.205Zm-10.279-3.677h4.4c0-.277.016-.544,0-.808a.709.709,0,0,0-.693-.644q-1.5-.014-3,0a.712.712,0,0,0-.694.644C6289.942,1241.365,6289.958,1241.632,6289.958,1241.909Z"
                        fill="#f39200"
                      />
                      <path
                        id="Path_140"
                        data-name="Path 140"
                        d="M6287.751,1254.041q0-2.364,0-4.728a.73.73,0,0,1,.994-.73.716.716,0,0,1,.47.626,1.7,1.7,0,0,1,0,.206q0,4.625,0,9.249a1.543,1.543,0,0,1-.016.3.732.732,0,0,1-1.45-.146c-.006-.926,0-1.852,0-2.777Z"
                        fill="#f39200"
                      />
                      <path
                        id="Path_141"
                        data-name="Path 141"
                        d="M6292.892,1254.064q0,2.352,0,4.7a.726.726,0,0,1-.442.716.69.69,0,0,1-.788-.132.773.773,0,0,1-.242-.619c0-1.247,0-2.494,0-3.741q0-2.833,0-5.668a.738.738,0,0,1,1.008-.739.753.753,0,0,1,.46.751Q6292.894,1251.7,6292.892,1254.064Z"
                        fill="#f39200"
                      />
                      <path
                        id="Path_142"
                        data-name="Path 142"
                        d="M6296.565,1254.04q0,2.364,0,4.728a.726.726,0,0,1-.441.716.69.69,0,0,1-.788-.132.764.764,0,0,1-.242-.619c0-1.231,0-2.463,0-3.7q0-2.856,0-5.714a.736.736,0,0,1,1.007-.739.752.752,0,0,1,.46.751Q6296.565,1251.688,6296.565,1254.04Z"
                        fill="#f39200"
                      />
                    </g>
                  </svg>
                </button>
                <div className="text-[#7E8096] font-medium text-xl bg-[#F4F5F9] h-full py-1 px-6">
                  {itemCount}
                </div>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.212"
                    height="16.212"
                    viewBox="0 0 16.212 16.212"
                  >
                    <path
                      id="Path_135"
                      data-name="Path 135"
                      d="M6477.445,1029.311h-5.393v-5.393a1.286,1.286,0,0,0-1.287-1.287h-.278a1.286,1.286,0,0,0-1.287,1.287v5.393h-5.393a1.287,1.287,0,0,0-1.287,1.287v.277a1.287,1.287,0,0,0,1.287,1.288h5.393v5.393a1.286,1.286,0,0,0,1.287,1.287h.278a1.286,1.286,0,0,0,1.287-1.287v-5.393h5.393a1.287,1.287,0,0,0,1.287-1.288v-.277A1.287,1.287,0,0,0,6477.445,1029.311Z"
                      transform="translate(-6462.52 -1022.631)"
                      fill="#f39200"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
