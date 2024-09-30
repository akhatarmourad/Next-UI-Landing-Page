import { Button, Avatar, Card, CardHeader, CardFooter, Image } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans p-10">
      {/* Hero */}
      <div className="flex flex-col items-center justify-center">
        <Avatar className="h-32 w-32" isBordered color="primary" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
        <h1 className="text-3xl font-semibold mt-5">Akhatar Mourad</h1>
        <p className="text-gray-700 mt-1">AI & Data Engineer | Software Developer | Graphic Designer</p>
        <Button color="primary" variant="shadow" className="mt-5">Let&apos;s Connect</Button>
      </div>

      {/* Skills */}
      <div className="relative flex flex-col items-center justify-center my-32">
        <div className="h-2/3 w-2/3 bg-gradient-to-r from-blue-900 to-violet-900 blur-[13rem] absolute" />
        <h1 className=" z-10 text-4xl font-semibold text-center mb-5">Cards in Next UI</h1>
        <div className=" z-10 max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
              <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-4.jpeg"
            />
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
              <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-3.jpeg"
            />
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
              <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-2.jpeg"
            />
          </Card>
          <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">New</p>
              <h4 className="text-black font-medium text-2xl">Acme camera</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="https://nextui.org/images/card-example-6.jpeg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Available soon.</p>
                <p className="text-black text-tiny">Get notified.</p>
              </div>
              <Button className="text-tiny" color="primary" radius="full" size="sm">
                Notify Me
              </Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
              <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-5.jpeg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="https://nextui.org/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Breathing App</p>
                  <p className="text-tiny text-white/60">Get a good night's sleep.</p>
                </div>
              </div>
              <Button radius="full" size="sm">Get App</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
