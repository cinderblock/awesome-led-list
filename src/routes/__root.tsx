import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
// import ForkMe from '@ribbon-studios/fork-me';
import { Count } from '../count';

export const Route = createRootRoute({
  component: RootComponent,
});

const categories = {
  '/pattern-drivers': 'Pattern Drivers',
  '/controllers': 'Controllers',
  '/pixel-ics': 'Pixel ICs',
  '/pixels': 'Pixels',
  '/pixel-decoders': 'Pixel Decoders',
  '/level-converters': 'Level Converters',
  '/adapters': 'Adapters',
  '/diy-microboards': 'DIY Microboards',
  '/drive-libraries': 'Drive Libraries',
  '/connectors': 'Connectors',
  '/diffusive-materials': 'Diffusive Materials',
  '/commercial-pixel-systems': 'Commercial Pixel Systems',
};

function RootComponent() {
  return (
    <>
      {/* <ForkMe.ForkMe slug="cinderblock/awesome-led-list" /> */}
      <div className="p-2 flex gap-2 text-lg">
        <Link
          key="/"
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{' '}
        <Link
          key="/about"
          to="/about"
          activeProps={{
            className: 'font-bold',
          }}
        >
          About
        </Link>{' '}
        <Link
          key="/dynamic/$param"
          to="/dynamic/$param"
          params={{ param: 'path1' }}
          activeProps={{
            className: 'font-bold',
          }}
        >
          path1
        </Link>{' '}
        <Link
          key="/dynamic/$param"
          to="/dynamic/$param"
          params={{ param: 'path2' }}
          activeProps={{
            className: 'font-bold',
          }}
        >
          path2
        </Link>{' '}
        <Link
          key="/json"
          to="/json"
          search={{ query: 1 }}
          activeProps={{
            className: 'font-bold',
          }}
        >
          json
        </Link>
        {Object.entries(categories).flatMap(([path, label]) => [
          ' ',
          <Link
            key={path}
            to={path}
            activeProps={{
              className: 'font-bold',
            }}
          >
            {label}
          </Link>,
        ])}
      </div>
      <hr />
      <Outlet />
      <Count />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
