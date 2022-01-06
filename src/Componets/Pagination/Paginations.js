import Pagination from "./Pagination"
import PaginationItem from "./PaginationItem"
import PaginationLink from "./PaginationLink"

function Paginations() {
    return (
        <>
            <Pagination 
                width={"600px"} 
                height={"100px"} 
                bgColor={"skyblue"} 
                borderRadius={"10px"}>
                <PaginationItem>
                    <PaginationLink text={"first"} href={"#"}/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink text={"prev"} href={"#"}/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink text={1} href={"#"}/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink text={2} href={"#"}/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink text={3} href={"#"}/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink text={4} href={"#"}/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink text={5} href={"#"}/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink text={"next"} href={"#"}/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink text={"last"} href={"#"}/>
                </PaginationItem>
            </Pagination>
        </>
    )
}

export default Paginations
