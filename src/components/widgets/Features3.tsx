import { FeaturesProps } from '~/shared/types';
import HeaderWidget from '../common/HeaderWidget';

const Features3 = ({ header, items }: FeaturesProps) => (
  <section className="scroll-mt-16" id="features3" style={{
    backgroundColor:"black",       
    }}>
    <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-20">
      {header && <HeaderWidget header={header} titleClassname="text-4xl md:text-5xl" />}
      <div className="mb-0 grid grid-cols-3 items-start gap-6 dark:text-white sm:grid-cols-2 md:my-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {items.map(({ title, description, icon: Icon, link }, index) => (
          <div
            key={`item-feature3-${index}`}
            className="col-span-3 pb-6 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
            style={{
              backgroundColor:"black",
              backgroundImage: `url(bg-${index}.png)`,   
              height: "100%",
              width:"100%",
              borderLeft:"solid #acaeb5",
              borderRight:"solid #acaeb5",
              borderRightWidth:".2px",
              borderLeftWidth:".2px",
              padding:"22px",

              }}
          >
            <div className="flex-flow flex">
              
              <div className="flex flex-col justify-between">
                <>
                  <h3 className="mb-3 text-xl font-bold">{title}</h3>
                  <p className="text-gray-600 dark:text-slate-400">{description}</p>
                </>
                {link && (
                  <div className="pt-2">
                    
                    <button
                      type="button"
                      className=" inline-block rounded border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:text-primary-100 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        data-te-ripple-init>
                               <a className="flex font-bold text-blue-600 hover:underline dark:text-gray-200 mb-2" href={link.href}> {link.label}</a>   
                      </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features3;
