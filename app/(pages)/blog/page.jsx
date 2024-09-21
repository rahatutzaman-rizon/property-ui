import Image from 'next/image'
import Link from 'next/link'
import banner from '../../Asset/blogs/bg.png';
import blog from '../../Asset/blogs/blog.png';
import blogs from '../../Asset/blogs/blogs.png';

const blogPosts = [
  {
    id: 1,
    title: 'UX/UI Design Trends Going Into 2024',
    category: 'Design',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur. Eu nulla tellus vel ...',
    image: '/images/featured-post.jpg',
    author: 'Writer Name'
  },
  // Add more blog posts here
]

const categories = [
  { name: 'Category Name', image: '/images/category1.jpg' },
  { name: 'Category Name', image: '/images/category2.jpg' },
  { name: 'Category Name', image: '/images/category3.jpg' },
  { name: 'Category Name', image: '/images/category4.jpg' },
  { name: 'Category Name', image: '/images/category5.jpg' },
  { name: 'Category Name', image: '/images/category6.jpg' },
  { name: 'Category Name', image: '/images/category7.jpg' },
  { name: 'Category Name', image: '/images/category8.jpg' },
]

export default function Home() {
  return (
    <div className="min-h-screen ">
      {/* Header */}
      <header className=" mt-16 relative h-72">
        <Image
          src={banner}
          alt="Header background"
          layout="fill"
          objectFit="cover"
          className=""
        />
        <div className="absolute inset-0 flex items-end  mb-12 justify-start ml-48  ">
          <h1 className="text-5xl font-bold text-white">Blogs</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Featured Post */}
        <div className="bg-white  rounded-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src={blog}
                alt={blogPosts[0].title}
                width={600}
                height={200}
                objectFit="cover"
              />
            </div>
            <div className="p-8">
              
              <Link href={`/blog`} className="block mt-1 text-4xl text-primary leading-tight font-medium  hover:underline">
                {blogPosts[0].title}
              </Link>
              <p className="mt-2 text-primary">{blogPosts[0].excerpt}</p>
              <p className="mt-2 text-primary font-bold mt-8">{blogPosts[0].author}</p>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="  py-8 mt-32 space-y-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 ">
        {categories.map((category, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative h-52">
              <Image
                src={blogs}
                alt={category.name}
                height={180}
                width={320}
                objectFit="cover" 
                className='ml-2 mt-2'
              />
            </div>
            <div className="p-4 mt-32">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">{category.name}</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur. Eu nulla tellus vel ...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
      </main>
    </div>
  )
}
