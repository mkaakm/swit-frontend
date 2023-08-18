'use client'

import {useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

import styles from './NavbarSearch.module.scss';

const NavbarSearch = ({ placeholder }) => {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const handleChange = ({target}) => {
        setSearch(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const params = new URLSearchParams(searchParams);
        params.set("search", search);
        router.push(`/search?${params}`);
        // router.push(`/search?search=миска`);
    }

    return (
        <form onSubmit={handleSubmit} className={styles['wrapper']}>
            <input onChange={handleChange} className={styles['input']} type="text" placeholder={placeholder} />
            <svg onClick={handleSubmit} className={styles['icon']}>
                <use href='/icons/nav-search.svg#icon-nav-search' />
            </svg>
        </form>
    )
}

export default NavbarSearch;