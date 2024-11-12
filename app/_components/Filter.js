"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const activeFilter = searchParams.get("capacity") ?? "all";


  const handleFilter = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, {scroll: false})
  }

  return (
    <div className="border-primary-800 flex">
        <Button filter="all" activeFilter={activeFilter} handleFilter={handleFilter}>All cabins</Button>
        <Button filter="small" activeFilter={activeFilter} handleFilter={handleFilter}>1 &mdash; 3 guests</Button>
        <Button filter="medium" activeFilter={activeFilter} handleFilter={handleFilter}>4 &mdash; 7 guests</Button>
        <Button filter="large" activeFilter={activeFilter} handleFilter={handleFilter}>8 &mdash; 12 guests</Button>
    </div>
  )
}

function Button({children, handleFilter, filter, activeFilter}) {
    return (
        <button onClick={() => handleFilter(filter)} className={`px-5 py-5 hover:bg-primary-700 ${filter === activeFilter ? 'bg-primary-700 text-primary-50' : ''}`}>
            {children}
        </button>
    )
}

export default Filter