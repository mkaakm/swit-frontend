'use client'

import {useState, useEffect, useRef} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

import styles from './NavbarMobSearch.module.scss';

const NavbarMobSearch = ({ close, placeholder }) => {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const inputRef = useRef();

    useEffect(()=> {
        // const body = document.querySelector("body");
        inputRef.current.focus();
        document.addEventListener("click", close);

        return ()=> document.removeEventListener("click", close);
    }, [])

    const handleChange = ({target}) => {
        setSearch(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const params = new URLSearchParams(searchParams);
        params.set("search", search);
        router.push(`/search?${params}`);
        close();
        // router.push(`/search?search=миска`);
    }

    return (
        <form onSubmit={handleSubmit} className={styles['wrapper']}>
            <input ref={inputRef} onChange={handleChange} className={styles['input']} type="text" placeholder={placeholder} />
            <svg onClick={handleSubmit} className={styles['icon']}>
                <use href='/icons/nav-search.svg#icon-nav-search' />
            </svg>
        </form>
    )
}

export default NavbarMobSearch;