'use client'
import { useBreakpoint } from '@tldraw/tldraw'
import React from 'react'

export const TldrawLogo = () => {
	const breakpoint = useBreakpoint()
	return (
		<a
			className={`tldrawLogo ${breakpoint < 5 ? 'tldrawLogo__mobile' : ''}`}
			href="https://www.tldraw.dev"
		>
			<svg
				width="110"
				height="40"
				viewBox="0 0 71 18"
				fill="none"
				style={{ padding: 8 }}
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 1.97802C0 0.88559 0.848303 0 1.89474 0H16.1053C17.1517 0 18 0.885591 18 1.97802V16.022C18 17.1144 17.1517 18 16.1053 18H1.89474C0.848303 18 0 17.1144 0 16.022V1.97802ZM10.6264 5.14801C10.6264 5.58302 10.4777 5.95212 10.1803 6.25531C9.88296 6.5585 9.52095 6.71009 9.0943 6.71009C8.65471 6.71009 8.28624 6.5585 7.98888 6.25531C7.69151 5.95212 7.54283 5.58302 7.54283 5.14801C7.54283 4.71301 7.69151 4.34391 7.98888 4.04072C8.28624 3.73753 8.65471 3.58594 9.0943 3.58594C9.52095 3.58594 9.88296 3.73753 10.1803 4.04072C10.4777 4.34391 10.6264 4.71301 10.6264 5.14801ZM7.52344 10.6224C7.52344 10.1874 7.67212 9.81831 7.96948 9.51512C8.27978 9.19875 8.65471 9.04056 9.0943 9.04056C9.50802 9.04056 9.87003 9.19875 10.1803 9.51512C10.4906 9.81831 10.6716 10.161 10.7233 10.5433C10.8268 11.2552 10.6975 11.9604 10.3355 12.659C9.98639 13.3577 9.48216 13.8916 8.82279 14.2607C8.46078 14.4716 8.16342 14.465 7.9307 14.2409C7.71091 14.03 7.77555 13.7795 8.12463 13.4895C8.31856 13.3445 8.48017 13.16 8.60946 12.9359C8.73875 12.7118 8.82279 12.4811 8.86158 12.2438C8.87451 12.1384 8.82925 12.0856 8.72582 12.0856C8.46725 12.0724 8.2022 11.9274 7.9307 11.6506C7.65919 11.3738 7.52344 11.0311 7.52344 10.6224Z"
					fill="#000000"
				/>
				<path
					d="M34.156 14.5761C34.2636 14.5761 34.3174 14.5223 34.3174 14.4147V12.2234C34.3174 12.0073 34.1422 11.8321 33.9261 11.8321H33.6424C33.5543 11.8321 33.4859 11.8076 33.437 11.7587C33.3978 11.7196 33.3783 11.6609 33.3783 11.5826V3.73207C33.3783 3.62446 33.3245 3.57065 33.2168 3.57065H30.7467C30.5306 3.57065 30.3554 3.74585 30.3554 3.96196V12.463C30.3554 13.1674 30.556 13.6957 30.9571 14.0478C31.3582 14.4 31.8717 14.5761 32.4978 14.5761H34.156Z"
					fill="#000000"
				/>
				<path
					d="M29.0935 12.2087C29.0935 11.9926 28.9183 11.8174 28.7022 11.8174H27.6701C27.3375 11.8174 27.1125 11.7587 26.9951 11.6413C26.8484 11.5043 26.775 11.2842 26.775 10.981V9.68478C26.775 9.46867 26.9502 9.29348 27.1663 9.29348H28.7022C28.9183 9.29348 29.0935 9.11829 29.0935 8.90217V6.71087C29.0935 6.60326 29.0397 6.54946 28.9321 6.54946H27.1663C26.9502 6.54946 26.775 6.37426 26.775 6.15815V4.46576C26.775 4.35815 26.7212 4.30435 26.6136 4.30435H24.2315C24.0154 4.30435 23.8402 4.47954 23.8402 4.69565V6.15815C23.8402 6.37426 23.665 6.54946 23.4489 6.54946H23.087C22.8708 6.54946 22.6957 6.72465 22.6957 6.94076V9.13207C22.6957 9.23967 22.7495 9.29348 22.8571 9.29348H23.4489C23.665 9.29348 23.8402 9.46867 23.8402 9.68478V11.2011C23.8402 12.3359 24.1386 13.1821 24.7353 13.7397C25.3321 14.2973 26.1978 14.5761 27.3326 14.5761H28.9321C29.0397 14.5761 29.0935 14.5223 29.0935 14.4147V12.2087Z"
					fill="#000000"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M37.6867 6.40272C38.1367 6.40272 38.5231 6.51522 38.8459 6.74022C39.1499 6.94586 39.4008 7.21279 39.5985 7.54101C39.6332 7.59855 39.6947 7.63533 39.7619 7.63533C39.8638 7.63533 39.9464 7.55268 39.9464 7.45074V3.96196C39.9464 3.74584 40.1216 3.57065 40.3377 3.57065H42.7198C42.8274 3.57065 42.8812 3.62446 42.8812 3.73207V14.1848C42.8812 14.4009 42.706 14.5761 42.4899 14.5761H40.1079C40.0002 14.5761 39.9464 14.5223 39.9464 14.4147V13.5333C39.9464 13.4285 39.8614 13.3435 39.7566 13.3435C39.692 13.3435 39.6321 13.3765 39.596 13.4301C39.3462 13.8013 39.0668 14.1051 38.7579 14.3413C38.4252 14.5957 38.0095 14.7228 37.5106 14.7228C36.8356 14.7228 36.3024 14.4929 35.9111 14.0332C35.5198 13.5734 35.3242 12.9571 35.3242 12.1842V9.10272C35.3242 8.26141 35.5247 7.60109 35.9258 7.12174C36.3367 6.64239 36.9236 6.40272 37.6867 6.40272ZM38.4204 11.9348C38.528 12.0522 38.7187 12.1109 38.9926 12.1109C39.2693 12.1109 39.5126 12.0774 39.7224 12.0105C39.8636 11.9655 39.9464 11.8265 39.9464 11.6783V9.35616C39.9464 9.22533 39.8827 9.09961 39.7647 9.04299C39.6723 8.9986 39.5763 8.9647 39.4769 8.94131C39.3106 8.89239 39.1492 8.86793 38.9926 8.86793C38.4937 8.86793 38.2443 9.11739 38.2443 9.6163V11.3772C38.2443 11.6413 38.303 11.8272 38.4204 11.9348Z"
					fill="#000000"
				/>
				<path
					d="M47.1839 14.5761C47.4001 14.5761 47.5752 14.4009 47.5752 14.1848V10.0559C47.5752 9.91955 47.6451 9.79072 47.7678 9.73131C47.8883 9.67299 48.0148 9.62487 48.1475 9.58696C48.353 9.51848 48.5829 9.48424 48.8372 9.48424C49.0231 9.48424 49.1992 9.49891 49.3655 9.52826C49.5291 9.55553 49.6884 9.59123 49.8436 9.63539C49.8671 9.64209 49.8915 9.64565 49.916 9.64565C50.0577 9.64565 50.1725 9.5308 50.1725 9.38912V6.71087C50.1725 6.64239 50.1481 6.5837 50.0992 6.53478C50.0698 6.50544 50.016 6.47609 49.9378 6.44674C49.8595 6.41739 49.7421 6.40272 49.5856 6.40272C49.1258 6.40272 48.7589 6.54457 48.485 6.82826C48.2423 7.07994 48.0533 7.44725 47.918 7.93019C47.8966 8.00665 47.8277 8.06087 47.7483 8.06087C47.6527 8.06087 47.5752 7.9834 47.5752 7.88783V6.71087C47.5752 6.60326 47.5214 6.54946 47.4138 6.54946H44.9878C44.7716 6.54946 44.5964 6.72465 44.5964 6.94076V14.4147C44.5964 14.5223 44.6502 14.5761 44.7579 14.5761H47.1839Z"
					fill="#000000"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M58.368 9.41087V11.788C58.368 11.9085 58.4096 11.9874 58.4929 12.0246C58.5165 12.0351 58.5407 12.0441 58.5651 12.0526C58.5923 12.0621 58.6196 12.0668 58.6468 12.0668H58.6664C58.8825 12.0668 59.0577 12.242 59.0577 12.4582V14.4147C59.0577 14.5223 59.0039 14.5761 58.8963 14.5761H57.9131C57.4338 14.5761 56.9936 14.4783 56.5925 14.2826C56.2443 14.1085 55.9774 13.857 55.7919 13.528C55.7494 13.4526 55.6716 13.4022 55.585 13.4022C55.5009 13.4022 55.4244 13.4497 55.3826 13.5227C55.1746 13.8859 54.9029 14.1735 54.5675 14.3853C54.2055 14.6103 53.7408 14.7228 53.1734 14.7228C52.4887 14.7228 51.9457 14.537 51.5446 14.1652C51.1436 13.7935 50.943 13.2897 50.943 12.6538V12.0815C50.943 11.3967 51.1436 10.8587 51.5446 10.4674C51.9555 10.0761 52.5327 9.88044 53.2762 9.88044H55.3305C55.444 9.88044 55.5359 9.78846 55.5359 9.675C55.5359 9.33261 55.443 9.10272 55.2571 8.98533C55.0811 8.85815 54.7387 8.79457 54.23 8.79457C53.3815 8.79457 52.5424 8.91812 51.7129 9.16522C51.6889 9.17237 51.664 9.17609 51.6389 9.17609C51.4977 9.17609 51.3832 9.06162 51.3832 8.92041V7.0337C51.3832 6.96522 51.3979 6.9163 51.4273 6.88696C51.4957 6.81848 51.6816 6.74511 51.9849 6.66685C52.2979 6.58859 52.6745 6.52011 53.1148 6.46141C53.5647 6.39294 54.0245 6.3587 54.4941 6.3587C55.8343 6.3587 56.8126 6.60326 57.4289 7.09239C58.055 7.57174 58.368 8.34457 58.368 9.41087ZM54.1566 12.6098C54.5823 12.6098 54.9796 12.5136 55.3484 12.3213C55.4677 12.259 55.5359 12.1319 55.5359 11.9972V11.6951C55.5359 11.479 55.3608 11.3038 55.1446 11.3038H54.1859C54.0196 11.3038 53.8925 11.3478 53.8044 11.4359C53.7262 11.5337 53.687 11.6511 53.687 11.788V12.1402C53.687 12.4533 53.8436 12.6098 54.1566 12.6098Z"
					fill="#000000"
				/>
				<path
					d="M64.2831 6.54946C64.1006 6.54946 63.9423 6.67566 63.9017 6.85362C63.6938 7.76648 63.5017 8.62378 63.3255 9.42554C63.1518 10.2575 63.0208 11.0466 62.9326 11.7931C62.922 11.8821 62.8468 11.9495 62.7573 11.9495C62.6585 11.9495 62.5792 11.8681 62.5807 11.7694C62.5921 11.0174 62.5616 10.2655 62.4891 9.51359C62.4206 8.70163 62.3326 7.79674 62.225 6.79891C62.2152 6.69131 62.1956 6.62283 62.1663 6.59348C62.1369 6.56413 62.0929 6.54946 62.0342 6.54946H59.9316C59.6887 6.54946 59.5045 6.76857 59.5457 7.008C59.7421 8.14646 59.9308 9.28491 60.1119 10.4234C60.3271 11.7147 60.5424 12.9571 60.7576 14.1505C60.7911 14.3014 60.8282 14.4092 60.8689 14.4739C60.8815 14.4939 60.8984 14.5108 60.918 14.5242C60.9687 14.5588 61.0228 14.5761 61.0804 14.5761H63.6985C63.8764 14.5761 64.032 14.456 64.0769 14.2839C64.1528 13.9935 64.2202 13.7339 64.2793 13.5049C64.3576 13.2016 64.426 12.9033 64.4847 12.6098C64.5434 12.3163 64.6021 11.9935 64.6608 11.6413C64.7227 11.3145 64.7885 10.9198 64.8583 10.4574C64.8714 10.3704 64.9461 10.306 65.034 10.306C65.1228 10.306 65.1979 10.3717 65.2098 10.4597C65.2695 10.902 65.3213 11.2812 65.3652 11.5973C65.4239 11.9397 65.4777 12.2429 65.5266 12.5071C65.5853 12.7614 65.644 13.0207 65.7027 13.2848C65.7614 13.5391 65.8299 13.8326 65.9081 14.1652C65.95 14.3076 65.9919 14.4106 66.0338 14.4741C66.0468 14.4939 66.0637 14.5108 66.0832 14.5242C66.1339 14.5588 66.188 14.5761 66.2456 14.5761H68.9092C69.0998 14.5761 69.2627 14.4388 69.2949 14.251L69.9141 10.6435C70.1391 9.33261 70.3592 8.03152 70.5744 6.74022C70.5842 6.61304 70.5402 6.54946 70.4424 6.54946H68.1855C67.9841 6.54946 67.8155 6.70245 67.7962 6.90299C67.712 7.77975 67.6353 8.61081 67.5663 9.3962C67.5027 10.2129 67.4729 11.0044 67.4767 11.7706C67.4772 11.8691 67.3978 11.9495 67.2993 11.9495C67.2091 11.9495 67.1334 11.8815 67.123 11.7918C67.0341 11.0294 66.8982 10.2455 66.7152 9.44022C66.5293 8.57935 66.3239 7.66957 66.0989 6.71087C66.0695 6.60326 66.0108 6.54946 65.9228 6.54946H64.2831Z"
					fill="#000000"
				/>
			</svg>
		</a>
	)
}
