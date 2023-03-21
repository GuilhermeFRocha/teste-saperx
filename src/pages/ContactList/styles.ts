import styled from 'styled-components'

export const ContactListContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 1.5rem;
    color: #fff;
  }
`
export const ContactListList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;
`

export const ContactListTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
`

export const ContactListTH = styled.th`
  white-space: nowrap;
  background-color: #323238;
  padding: 1rem;
  text-align: left;
  color: #fff;
  font-size: 0.875rem;
  line-height: 1.6;
  &:first-child {
    border-top-left-radius: 8px;
    padding-left: 1.5rem;
  }
  &:last-child {
    border-top-right-radius: 8px;
    padding-right: 1.5rem;
  }
`

export const ContactListTD = styled.td`
  white-space: nowrap;
  background-color: #29292e;
  border-top: 4px solid #202024;
  padding: 1rem;
  font-size: 0.875rem;
  line-height: 1.6;
  &:first-child {
    width: 50%;
    padding-left: 1.5rem;
  }
  &:last-child {
    padding-right: 1.5rem;
  }
`