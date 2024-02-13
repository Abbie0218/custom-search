import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    Popover,
    ListItemAvatar,
    Avatar,
    ListSubheader,
} from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "../utils/Search";
import React from "react";

interface IProps{
    list: any,
    listHeaderLabel: any,
    floatPosition: any

}

const UserSearch = (props: IProps) => {
    // const [searchTerm, setSearchTerm] = useState("");
    const [openSearch, setOpenSearch] = useState(false);
  
    const openSearchBar = () => {
        setOpenSearch(true);
    };

    const closeSearchBar = () => {
        setOpenSearch(false);
    };

    // const handleSelect = (item: any) => {
    //     setSearchTerm(item.item_name);
    //     //   getMasterList(obj);
    // };

    return (
        <>

            <Search sx={{ float: props.floatPosition }} onClick={openSearchBar}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    sx={{ width: "220px", height: "34px" }}
                    placeholder="Search"
                    inputProps={{ "aria-label": "search" }}

                />
            </Search>

            <Popover
                open={openSearch}
                onClose={closeSearchBar}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                sx={{
                    top:'16px',
                    borderRadius: "2vh",
                    mt: {
                        sm: "15.5%",
                        md: "11.5%",
                        lg: "6.5%",
                        xl: "4.8%",
                    },
                }}
            >
                <Box sx={{ width: "fit-content", height: "fit-content" }}>
                    <List
                        disablePadding
                        sx={{
                            width: "100%",
                            maxWidth: 360,
                            bgcolor: "background.paper",
                            p: 2,
                            height: "200px",
                            overflow: "auto",
                            boxShadow: "none",
                            border: 'none'
                        }}
                        subheader={
                            <ListSubheader component='div'>{props.list?.length > 0 ? props.listHeaderLabel : ""}</ListSubheader>
                        }

                    >
                        {props.list?.length > 0 ? (
                            props.list?.map((item: any) => {
                                return (
                                    <>
                                        <ListItem
                                            alignItems="flex-start"
                                            sx={{ cursor: "pointer", border: "none" }}
                                        >
                                            <ListItemAvatar>
                                                <Avatar sx={{ width: '24px', height: '24px' }} alt={item.name}  src="https://media.istockphoto.com/id/954956446/photo/graduation-celebration.jpg?s=1024x1024&w=is&k=20&c=dqqRmkBua9C7AlFxUg3XTCrR5W1hG1lfuY20IY6iIr0="/>
                                            </ListItemAvatar>
                                            <ListItemText sx={{fontSize:"12px"}}>{item.name}</ListItemText>
                                        </ListItem>

                                    </>
                                );
                            })
                        ) : (
                            <Typography
                                sx={{
                                    fontFamily: "Poppins",
                                    fontSize: "12px",
                                    textAlign: "center",
                                    margin: "auto",
                                }}
                            >
                                No data found
                            </Typography>
                        )}
                    </List>
                </Box>
            </Popover>
        </>
    );
};

export default UserSearch;
