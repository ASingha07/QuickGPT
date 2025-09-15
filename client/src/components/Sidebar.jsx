import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { assets } from '../assets/assets';
import moment from 'moment';
import toast from 'react-hot-toast';


const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {

    const { chats, setSelectedChat, theme, setTheme, user, navigate, createNewChat, axios, setChats, fetchUsersChats, setToken, token } = useAppContext();
    const [search, setSearch] = useState('');

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        toast.success("Logged out successfully");
    }

    const deleteChat = async (e, chatId) => {
        try {
            e.stopPropagation();
            const confirm = window.confirm("Are you sure you want to delete this chat?");
            if (!confirm) return;
            const { data } = await axios.post('/api/chat/delete', { chatId }, { headers: { Authorization: token } });
            if (data.success) {
                setChats(prev => prev.filter((chat) => chat._id !== chatId));
                await fetchUsersChats();
                toast.success(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className={`flex flex-col h-screen min-w-72 p-5 dark:bg-gradient-to-b from-[#242124]/30 to-[#000000]/30 border-r border-[#80609F]/30 backdrop-blur-3xl transition-all duration-500 max-md:absolute left-0 z-1 ${!isMenuOpen && 'max-md:-translate-x-full'}`}>
            {/* Logo */}
            <img src={theme === 'dark' ? assets.logo_full : assets.logo_full_dark} alt='Logo' className='w-full max-w-48' />

            {/* New Chat Button */}
            <button onClick={createNewChat} className='flex justify-center items-center w-full py-2 mt-10 text-white bg-gradient-to-r from-[#A456F7] to-[#3D81F6] text-sm rounded-md cursor-pointer'>
                <span className='mr-2 text-xl'>+</span> New Chat
            </button>

            {/* Search Conversations */}
            <div className='flex items-center gap-2 p-3 mt-4 border border-gray-400 dark:border-white/20 rounded-md'>
                <img src={assets.search_icon} alt='Search' className='w-4 not-dark:invert' />
                <input
                    type='text'
                    placeholder='Search conversations'
                    className='text-xs placeholder:text-gray-400 outline-none'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Recent Chats */}
            {chats.length > 0 && <p className='mt-4 text-sm'>Recent Chats</p>}
            <div className='flex-1 overflow-y-scroll mt-3 text-sm space-y-3'>
                {
                    chats.filter((chat) => chat.messages[0] ? chat.messages[0]?.content.toLowerCase().includes(search.toLowerCase()) : chat.name.toLowerCase().includes(search.toLowerCase())).map((chat) => (
                        <div onClick={() => { navigate('/'); setSelectedChat(chat); setIsMenuOpen(false) }}
                            key={chat._id} className='p-2 px-4 dark:bg-[#57317C]/10 border border-gray-300 dark:border-[#80609F]/15 rounded-md cursor-pointer flex justify-between group'>
                            <div>
                                <p className='truncate w-full'>
                                    {chat.messages.length > 0 ? chat.messages[0].content.slice(0, 32) : chat.name}
                                </p>
                                <p className='text-xs text-gray-500 dark:text-[#B1A6C0]'>{moment(chat.updatedAt).fromNow()}</p>
                            </div>
                            <img src={assets.bin_icon} alt='Delete' className='w-4 cursor-pointer not-dark:invert block' onClick={e => toast.promise(deleteChat(e, chat._id), {loading: 'deleting...'})} />
                        </div>
                    ))
                }
            </div>

            {/* Community Images */}
            <div onClick={() => { navigate('/community'); setIsMenuOpen(false) }} className='flex items-center gap-2 p-3 mt-4 border border-gray-300 dark:border-white/15 rounded-md cursor-pointer hover:scale-103 transition-all'>
                <img src={assets.gallery_icon} alt='Community' className='w-4.5 not-dark:invert' />
                <div className='flex flex-col text-sm'>
                    <p>Community Images</p>
                </div>
            </div>

            {/* Credit Purchases Option */}
            <div onClick={() => { navigate('/credits'); setIsMenuOpen(false) }} className='flex items-center gap-2 p-3 mt-4 border border-gray-300 dark:border-white/15 rounded-md cursor-pointer hover:scale-103 transition-all'>
                <img src={assets.diamond_icon} alt='Community' className='w-4.5 dark:invert' />
                <div className='flex flex-col text-sm'>
                    <p>Credits : {user?.credits}</p>
                    <p className='text-xs text-gray-400'>Purchase credits to use quickgpt</p>
                </div>
            </div>

            {/* Dark Mode Toggle */}
            <div className='flex items-center justify-between gap-2 p-3 mt-4 border border-gray-300 dark:border-white/15 rounded-md'>
                <div className='flex items-center gap-2 text-sm'>
                    <img src={assets.theme_icon} className='w-4 not-dark:invert' />
                    <p>{theme === 'dark' ? "Light Mode" : "Dark Mode"}</p>
                </div>
                <label className='relative inline-flex cursor-pointer'>
                    <input onChange={() => { setTheme(theme === 'dark' ? 'light' : 'dark') }} type='checkbox' className='sr-only peer' checked={theme === 'dark'} />
                    {theme === 'dark' ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-sun-high"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" /><path d="M6.343 17.657l-1.414 1.414" /><path d="M6.343 6.343l-1.414 -1.414" /><path d="M17.657 6.343l1.414 -1.414" /><path d="M17.657 17.657l1.414 1.414" /><path d="M4 12h-2" /><path d="M12 4v-2" /><path d="M20 12h2" /><path d="M12 20v2" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-moon-stars"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /><path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" /><path d="M19 11h2m-1 -1v2" /></svg>
                    }
                </label>
            </div>

            {/* User Account */}
            <div className='flex items-center gap-3 p-3 mt-4 border border-gray-300 dark:border-white/15 rounded-md cursor-pointer group'>
                <img src={assets.user_icon} alt='user' className='w-7 rounded-full' />
                <p className='flex-1 text-sm dark:text-primary truncate'>{user ? user.name : 'Login your account'}</p>
                {user && <img onClick={logout} src={assets.logout_icon} alt='Logout' className='h-5 cursor-pointer hidden not-dark:invert group-hover:block' />}
            </div>

            {/* Close Icon */}
            <img onClick={() => setIsMenuOpen(false)} src={assets.close_icon} className='absolute top-3 right-3 w-5 h-5 cursor-pointer md:hidden not-dark:invert' />
        </div>
    )
}

export default Sidebar
