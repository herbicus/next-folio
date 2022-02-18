import Link from 'next/link';

import { config } from '../data/config';

const Footer = () => {
  return (
    <footer className="py-10 px-4 text-sm bg-primary-500 border-0 md:px-8">
      <nav className="flex flex-wrap justify-end items-center mx-auto max-w-screen-xl sm:justify-between">
        <p className="hidden text-xs text-gray-150 sm:block">
          © {new Date().getFullYear()} {config.herb_label}
        </p>

        <ul className="flex flex-nowrap">
          <li className="mr-6">
            <Link href={`${config.linkedin_src}`}>
              <a
                className="text-white hover:text-[#cd4828] border-0 hover:border-0 transition"
                target="_blank"
                rel="nofollow noreferrer"
                title="Linkedin"
              >
                <svg
                  id="post-linkedin"
                  className="w-[32px] h-auto"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 19H5v-9h3v9zM6.5 8.31c-1 0-1.81-.81-1.81-1.81S5.5 4.69 6.5 4.69s1.81.81 1.81 1.81S7.5 8.31 6.5 8.31zM19 19h-3v-5.3c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V19h-3v-9h3v1.2c.52-.84 1.59-1.4 2.5-1.4 1.93 0 3.5 1.57 3.5 3.5V19z"
                  ></path>
                </svg>
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href={`${config.instagram_src}`}>
              <a
                className="text-white hover:text-[#cd4828] border-0 hover:border-0 transition"
                target="_blank"
                rel="nofollow noreferrer"
                title="Instagram"
              >
                <svg
                  id="instagram"
                  className="w-[32px] h-auto"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12,0 C15.3,0 15.7,0 17,0 C18.3,0.1 19.1,0.3 19.9,0.6 C20.7,0.9 21.3,1.3 22,2 C22.7,2.7 23.1,3.4 23.3,4.2 C23.6,5 23.8,5.8 23.9,7.1 C24,8.3 24,8.7 24,12 C24,15.3 24,15.7 23.9,16.9 C23.8,18.2 23.6,19 23.3,19.8 C23,20.6 22.6,21.2 21.9,21.9 C21.3,22.6 20.6,23 19.8,23.3 C19,23.6 18.2,23.8 16.9,23.9 C15.7,24 15.3,24 12,24 C8.7,24 8.3,24 7,24 C5.7,23.9 4.9,23.7 4.1,23.4 C3.3,23.1 2.7,22.7 2,22 C1.3,21.3 0.9,20.6 0.7,19.8 C0.4,19 0.2,18.2 0.1,16.9 C0,15.7 0,15.3 0,12 C0,8.7 0,8.3 0.1,7.1 C0.1,5.8 0.3,4.9 0.6,4.1 C0.9,3.4 1.3,2.7 2,2 C2.7,1.3 3.4,0.9 4.1,0.6 C4.9,0.3 5.8,0.1 7.1,0.1 C8.3,0 8.7,0 12,0 Z M12,2.2 C8.8,2.2 8.4,2.2 7.2,2.2 C6,2.3 5.3,2.5 4.9,2.6 C4.4,2.9 4,3.1 3.5,3.5 C3.1,3.9 2.8,4.3 2.6,4.9 C2.5,5.3 2.3,6 2.3,7.2 C2.2,8.4 2.2,8.8 2.2,12 C2.2,15.2 2.2,15.5 2.3,16.8 C2.3,17.9 2.5,18.6 2.7,19 C2.9,19.6 3.2,20 3.6,20.4 C4,20.8 4.4,21.1 5,21.3 C5.4,21.5 6,21.6 7.2,21.7 C8.4,21.8 8.8,21.8 12,21.8 C15.2,21.8 15.5,21.8 16.8,21.7 C17.9,21.7 18.6,21.5 19,21.3 C19.6,21.1 20,20.8 20.4,20.4 C20.8,20 21.1,19.6 21.3,19 C21.5,18.6 21.6,18 21.7,16.8 C21.8,15.6 21.8,15.2 21.8,12 C21.8,8.8 21.8,8.5 21.7,7.2 C21.7,6.1 21.5,5.4 21.3,5 C21.1,4.4 20.8,4 20.4,3.6 C20,3.2 19.6,2.9 19,2.7 C18.6,2.5 18,2.4 16.8,2.3 C15.6,2.2 15.2,2.2 12,2.2 Z M12,5.8 C15.4,5.8 18.2,8.6 18.2,12 C18.2,15.4 15.4,18.2 12,18.2 C8.6,18.2 5.8,15.4 5.8,12 C5.8,8.6 8.6,5.8 12,5.8 Z M12,16 C14.2,16 16,14.2 16,12 C16,9.8 14.2,8 12,8 C9.8,8 8,9.8 8,12 C8,14.2 9.8,16 12,16 Z M18.4,7 C17.6268014,7 17,6.37319865 17,5.6 C17,4.82680135 17.6268014,4.2 18.4,4.2 C19.1731986,4.2 19.8,4.82680135 19.8,5.6 C19.8,6.37319865 19.1731986,7 18.4,7 Z"
                  ></path>
                </svg>
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href={`${config.codepen_src}`}>
              <a
                className="text-white hover:text-[#cd4828] border-0 hover:border-0 transition"
                target="_blank"
                rel="nofollow noreferrer"
                title="Codepen"
              >
                <svg
                  id="codepen"
                  className="w-[32px] h-auto scale-[1.65]"
                  width="122"
                  height="120"
                  viewBox="0 0 122 120"
                >
                  <path
                    fill="currentColor"
                    d="M97.071,48.281c-0.007-0.047-0.019-0.092-0.026-0.139c-0.016-0.09-0.032-0.18-0.056-0.267
                    c-0.014-0.053-0.033-0.104-0.05-0.154c-0.025-0.078-0.051-0.156-0.082-0.232c-0.021-0.053-0.047-0.105-0.071-0.156
                    c-0.033-0.072-0.068-0.142-0.108-0.21c-0.029-0.051-0.061-0.1-0.091-0.148c-0.043-0.066-0.087-0.131-0.135-0.193
                    c-0.035-0.047-0.072-0.093-0.109-0.138c-0.051-0.059-0.104-0.117-0.159-0.172c-0.042-0.043-0.083-0.086-0.127-0.125
                    c-0.059-0.053-0.119-0.104-0.18-0.152c-0.048-0.037-0.095-0.074-0.145-0.109c-0.019-0.012-0.035-0.027-0.053-0.039L61.769,23.438
                    c-1.071-0.714-2.466-0.714-3.537,0L24.321,46.045c-0.018,0.012-0.034,0.027-0.053,0.039c-0.05,0.035-0.097,0.072-0.144,0.109
                    c-0.062,0.049-0.123,0.1-0.181,0.152c-0.045,0.039-0.086,0.082-0.128,0.125c-0.055,0.055-0.108,0.113-0.158,0.172
                    c-0.038,0.045-0.075,0.091-0.11,0.138c-0.047,0.062-0.092,0.127-0.134,0.193c-0.032,0.049-0.062,0.098-0.092,0.148
                    c-0.039,0.068-0.074,0.139-0.108,0.21c-0.024,0.051-0.049,0.104-0.071,0.156c-0.031,0.076-0.057,0.154-0.082,0.232
                    c-0.017,0.051-0.035,0.102-0.05,0.154c-0.023,0.087-0.039,0.177-0.056,0.267c-0.008,0.047-0.02,0.092-0.025,0.139
                    c-0.019,0.137-0.029,0.275-0.029,0.416v22.607c0,0.141,0.011,0.279,0.029,0.418c0.006,0.045,0.018,0.092,0.025,0.137
                    c0.017,0.09,0.032,0.18,0.056,0.268c0.015,0.053,0.033,0.104,0.05,0.154c0.025,0.078,0.051,0.155,0.082,0.233
                    c0.021,0.053,0.047,0.104,0.071,0.154c0.034,0.072,0.069,0.143,0.108,0.213c0.029,0.049,0.06,0.098,0.092,0.146
                    c0.042,0.066,0.087,0.131,0.134,0.193c0.035,0.049,0.072,0.094,0.11,0.139c0.05,0.059,0.103,0.117,0.158,0.172
                    c0.042,0.043,0.083,0.086,0.128,0.124c0.058,0.053,0.118,0.104,0.181,0.152c0.047,0.037,0.094,0.074,0.144,0.109
                    c0.019,0.012,0.035,0.027,0.053,0.039l33.911,22.607c0.536,0.357,1.152,0.537,1.769,0.537c0.616,0,1.233-0.18,1.768-0.537
                    L95.68,73.956c0.018-0.012,0.034-0.027,0.053-0.039c0.05-0.035,0.097-0.072,0.145-0.109c0.061-0.049,0.121-0.1,0.18-0.152
                    c0.044-0.038,0.085-0.081,0.127-0.124c0.056-0.055,0.108-0.113,0.159-0.172c0.037-0.045,0.074-0.09,0.109-0.139
                    c0.048-0.062,0.092-0.127,0.135-0.193c0.03-0.049,0.062-0.098,0.091-0.146c0.04-0.07,0.075-0.141,0.108-0.213
                    c0.024-0.051,0.05-0.102,0.071-0.154c0.031-0.078,0.057-0.155,0.082-0.233c0.017-0.051,0.036-0.102,0.05-0.154
                    c0.023-0.088,0.04-0.178,0.056-0.268c0.008-0.045,0.02-0.092,0.026-0.137c0.018-0.139,0.028-0.277,0.028-0.418V48.697
                    C97.1,48.557,97.089,48.418,97.071,48.281z M63.188,32.048L88.17,48.701l-11.158,7.465l-13.823-9.247V32.048z M56.812,32.048
                    v14.871l-13.822,9.247l-11.159-7.465L56.812,32.048z M29.278,54.665L37.255,60l-7.977,5.335V54.665z M56.812,87.953L31.831,71.3
                    l11.159-7.463l13.822,9.245V87.953z M60,67.543L48.723,60L60,52.458L71.276,60L60,67.543z M63.188,87.953V73.082l13.823-9.245
                    L88.17,71.3L63.188,87.953z M90.723,65.336L82.746,60l7.977-5.335V65.336z"
                  />
                </svg>
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href={`${config.facebook_src}`}>
              <a
                className="text-white hover:text-[#cd4828] border-0 hover:border-0 transition"
                target="_blank"
                rel="nofollow noreferrer"
                title="Facebook"
              >
                <svg
                  id="post-facebook"
                  className="w-[32px] h-auto"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 2v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v7h-3v-7h-2v-3h2V7.5C13 5.57 14.57 4 16.5 4H19z"
                  ></path>
                </svg>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export { Footer };
