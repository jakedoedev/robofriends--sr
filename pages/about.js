import Link from 'next/link';
import Image from '../components/image';

const About = () => {
  return (
    <div style={{ color: 'blue' }}>
      <h1>About</h1>
      <Image />
      <div>
        <p>
          The story of a dragon
        </p>
      </div>

      <Link href="/">
        <button>Back</button>
      </Link>
    </div>
  )
}


export default About;
