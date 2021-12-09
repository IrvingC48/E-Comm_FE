import React from 'react'
import { HiSearch } from "react-icons/hi";
import { Popover, Button, SearchInput, Position, Pane, IconButton } from 'evergreen-ui'

const Search = () => {
    return (
        <div className="navbar-item">
            <Popover
                trigger='hover'
                position={Position.BOTTOM_LEFT}
                content={
                        // <SearchInput onChange={(e) => setValue(e.target.value)} value={value} />
                    <Pane width={340} height={40} display="flex" alignItems="center" justifyContent="space-around" flexDirection="row">
                        <SearchInput placeholder="Search..."/>
                        <IconButton icon={<HiSearch/>} />
                    </Pane>
                }
                >
                <Button iconAfter={<HiSearch/>}>Search</Button>
            </Popover>
        </div>
    )
}

export default Search
