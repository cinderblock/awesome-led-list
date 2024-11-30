import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import ForkMe from 'fork-me-on-github';

// export const Route = createRootRoute({
//   component: RootComponent,
// });

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

export default function Layout() {
  return (
    <>
      <ForkMe repo="https://github.com/cinderblock/awesome-led-list" />
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
        </Link>
        {Object.entries(categories).map(([path, label]) => (
          <>
            {' '}
            <Link
              key={path}
              to={path}
              activeProps={{
                className: 'font-bold',
              }}
            >
              {label}
            </Link>
          </>
        ))}
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
