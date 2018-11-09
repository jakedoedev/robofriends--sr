import Link from 'next/link';

const Index = () => (
  <div>
    <h1>SSR Master</h1>

      {/* This doesn't reload the page */}
      <Link href='/about' >
        <button>About</button>
      </Link>
      <Link href='/robots' >
        <button>Robots</button>
      </Link>


      {/* This reloads the page */}
      {/* a href='/about' > About </a> */}

  </div>
);

export default Index;
