import { NavLink } from "react-router-dom";
import Header from "../../../Components/Header";

const Frequently_more = () => {
  return (
    <div className="bg-gradient-to-b from-blue-300   via-red-300 to-green-300 py-20  ">
      <div className="  w-11/12 mx-auto">
        <div>
          <Header
            className="text-6xl py-10 w-7/12   text-start"
            title={"Frequently Asked Questions"}></Header>
        </div>
        <div className=" ">
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">What is Rainbow?</div>
            <div className="collapse-content text-sm">
              Rainbow is an open source, self-custodial wallet for Ethereum and
              Ethereum based cryptocurrencies and collectibles.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border my-3 border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">Is Rainbow safe?</div>
            <div className="collapse-content text-sm">
              Yes, Rainbow is safe. We never have access to your wallet’s
              information or private keys.{" "}
              <a className="underline text-red-500" href="">
                {" "}
                You can learn more about what makes Rainbow safe here
              </a>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              How can I contact Rainbow's customer support?
            </div>
            <div className="collapse-content text-sm">
              You can contact Rainbow’s support team by emailing
              support@rainbow.me.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 border  my-3 border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              How do I import my existing wallet into Rainbow?
            </div>
            <div className="collapse-content text-sm">
              It only takes 5 minutes to import your existing wallet into
              Rainbow! We have guides on
              <a
                className="text-red-500 hover:underline"
                href="https://rainbow.me/support/extension/importing-an-existing-wallet-on-the-browser-extension">
                {" "}
                how to import your wallet into the Rainbow Extension
              </a>{" "}
              and how to{" "}
              <a
                className="text-red-500 hover:underline"
                href="https://rainbow.me/support/app/import-an-existing-eth-wallet">
                import your wallet into Rainbow Mobile
              </a>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              What devices does Rainbow support?
            </div>
            <div className="collapse-content text-sm">
              Rainbow is available on iOS and Android for mobile, and on Chrome,
              Brave, Edge, Arc, and Firefox for desktop. You can download all
              versions of Rainbow on our{" "}
              <NavLink className="text-red-500 hover:underline" to="/download">
                download page
              </NavLink>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 border  my-3 border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              What networks does Rainbow support?
            </div>
            <div className="collapse-content text-sm">
              Rainbow has native support for Ethereum mainnet, Polygon,
              Arbitrum, Optimism, Binance Smart Chain, Base, and Zora networks.{" "}
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              Are my private keys stored securely with Rainbow Wallet?
            </div>
            <div className="collapse-content text-sm">
              Rainbow does not store your private keys. Furthermore, Rainbow
              takes the protection of your personal information seriously. We
              follow a strict policy of not gathering any personally identifying
              information (PII) about our users.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 border  my-3 border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              Does it cost money to use Rainbow?
            </div>
            <div className="collapse-content text-sm">
              Rainbow is free to use, and you can create and use as many Rainbow
              wallets as you like! Network, service, and protocol fees still
              apply.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              Can I use Rainbow with dapps?
            </div>
            <div className="collapse-content text-sm">
              Yes, you can use Rainbow to connect your wallet to dapps. Using
              the Rainbow Extension, you can{" "}
              <a className="text-red-600 hover:underline" href="connect to dapps using your own wallet">
                connect to dapps using your own wallet
              </a>{" "}
              , or{" "}
              <a className="text-red-600 hover:underline" href="https://rainbow.me/support/extension/connecting-to-dapps-in-impersonation-mode">
                connect as someone else using Impersonation mode
              </a>
              . Using Rainbow Mobile, you can
              <a className="text-red-600 hover:underline" href="https://rainbow.me/support/app/connect-to-a-website-or-app">
                use WalletConnect to connect your wallet to a dapp
              </a>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 border  my-3 border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              What is RainbowKit?
            </div>
            <div className="collapse-content text-sm">
              <a className="text-red-600 hover:underline" href="https://rainbowkit.com/">RainbowKit</a> is Rainbow’s
              developer focused product—it is a React library that makes it easy
              to add wallet connection to your dapp. It's intuitive, responsive
              and customizable.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frequently_more;
