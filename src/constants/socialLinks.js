import React from "react"
import { 
  FaBluesky, 
  FaMastodon,
  FaLinkedin,
  FaThreads
} from "react-icons/fa6";
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://bsky.app/profile/jonaskf.bsky.social">
          <FaBluesky className="social-icon bluesky-icon"></FaBluesky>
        </a>
      </li>
      <li>
        <a href="https://mastodon.nu/@drjones">
          <FaMastodon className="social-icon mastodon-icon"></FaMastodon>
        </a>
      </li>
      <li>
        <a href="https://www.threads.net/@jonaskratfrank">
          <FaThreads className="social-icon threads-icon"></FaThreads>
        </a>
      </li>
      <li>
        <a href="www.linkedin.com/in/jonaskratfrank">
          <FaLinkedin className="social-icon linkedin-icon"></FaLinkedin>
        </a>
      </li>

    </ul>
  )
}
export default SocialLinks
